## Assignment

Assigment is accomplished with the latest Node LTS 18.16.1.

# Write the function

Requirements: function (fn) that aggregate inputs (strings) and return it if there is no input for examples

Code examples:

```
console.log(fn("hello").fn("world").fn("!!!").fn())
//Will print: hello world !!!

console.log(fn("This").fn("is").fn("just").fn("a").fn("test").fn())
//Will print: This is just a test
```

Function:

```
class Fn {
constructor() {
 	this.state = [];
}

fn(string) {
	if (string === undefined) {
		return this.state.join(" ");
	} else {
		this.state.push(string);
		return this;
		}
	}
}

function fn(string) {
	const fnObj = new Fn();
	return fnObj.fn(string);
}

```

# Build Full Stack application

Description of the assignment:
Please implement a small cart system, the cart will present 1 product to purchase with 2 plans type: monthly subscription base and yearly subscription.
Please create a UI that allows the user to add and remove from the cart.
Once the user choose the product and the plan the cart should redirect to a purchase form when the user will insert his credit card information.

Note: prepare development environment (production and deployment is not required).

Chosen technologies:

Frontend:

- 3 routes are created with React
- MUI
- Error and loading components are added, not found pages
- Cookies are used for: items storage in the card for not logged in usersa

Backend:

- 10 routes are build with Nest.js and MongoDB
- Dependency injection for base service is implemented
- Documentation is provided with Swagger (http://localhost:5000/api)
- JWT authentication is ready for implemention
- 2 guards are added
- Decorator for extracting JWT token is created
- 4 models for MongoDB are added and described
- 2 Dockerfiles are added to backend and frontend
- MongoDB exists on Mongo Atlas
- API tests are added

# Start project (development environment)

Copy environmental variables

```
cp ./server/.development-example.env ./server/.development.env
cp ./client/.example.env ./client/.env

```

Run DEV

```
docker-compose up -d

or

yarn dev

```

Run tests manually

```
yarn test
```

Next steps:

- Implement authentification on front end
- Add exisiting guards to routes on backend
