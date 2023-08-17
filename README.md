# Technical assessment

## Stack used

The technologies used are React and Express.js.

The client-side and server-side are not separated to accomodate for the simple installation of the whole app.

However, I assert that the client-side folders and server-side folders be separated for separation of concerns.


## Before running, you should keep in mind the following

1. You should have node installed

2. Do NOT run  a separate "npm start" for the front-end and a separate "npm start" for the backend. It won't work since we are containing the client-side inside the server-side.

3. Instead, build the client side, then run the server-side. The server-side will run the build folder assuming the build is successful.

4. Internet connection is required to consume the external apis.


## How to Run

1. Navigate to the client folder, install the dependencies and build:

	```
	cd client

	npm install

	npm run build
	```

2. Navigate to the project root	and install all dependencies
	```
	npm install
	```

3.	Run the server

	```
	npm start
	```