import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('API tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) - Basic route return welcoming string', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(
        'Welcomed to Cart System API! Check out all docs at http://localhost:5000/api',
      );
  });

  it('/ (GET) / ITEMS - Returns an array and 200 status', () => {
    return request(app.getHttpServer())
      .get('/items')
      .expect(200)
      .then((response) => {
        expect(response?.body).toBeTruthy();
      });
  });

  it('/ (POST) / ITEMS / ID - Finds an object and 200 status by existing id', async () => {
    const items = (await request(app.getHttpServer()).get('/items'))?.body;

    return request(app.getHttpServer())
      .get('/items/' + items[0]._id)
      .expect(200)
      .then((response) => {
        expect(response?.body).toEqual(items[0]);
      });
  });

  it('/ (POST) / ITEMS / ID - Finds 500 status by not existing non-mongo id', async () => {
    return await request(app.getHttpServer()).get('/items/abc').expect(500);
  });

  it('/ (POST) / ITEMS / ID - Finds 200 status by not existing mongo id', async () => {
    return await request(app.getHttpServer())
      .get('/items/507f191e810c19729de860ea')
      .expect(200);
  });

  it('/ (POST) / AUTH / LOGIN - Takes wrong login and password and return user without password', async () => {
    return await request(app.getHttpServer())
      .post('/auth/login').send({
        username: 'nameOfUser',
        password: 'passwordOfUser',
      })
      .expect(500);
  });

  it('/ (GET)/ME + PROTECTED ROUTE', async () => {
    let token = ''
    
    await request(app.getHttpServer())
    .post('/auth/login')
    .send({
      username: 'username',
      password: 'password',
    })
    .then((response) => {
      expect(response?.body?.access_token).toBeTruthy();
      token = response?.body?.access_token;
    });

    return await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .then((response) => {
        expect(response?.body?._id).toBeTruthy();
        expect(response?.body?.username).toBeTruthy();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
