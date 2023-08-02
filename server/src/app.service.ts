import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcomed to Cart System API! Check out all docs at http://localhost:5000/api';
  }
}
