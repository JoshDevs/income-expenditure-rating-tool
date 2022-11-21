# Joshua Osei Income Expenditure Rating Tool

## Summary

The Frontend and backend of this test will both be completed in Typescript for speed and familiarity.

React with React router for the Frontend and Node for the backend.

The front end was initiated using Vite and the backend api scaffolding using NestJS.

## Instructions

Please ensure you have node v16 installed to run this through this implementation.

- Open terminal in your preferred IDE
- Change directory into 'frontend' directory
- Run ```npm i``` to install all required package dependencies locally
- Run ```npm run dev``` to start the webapp ui dev server
- Change directory into the 'backend' directory
- Run ```npm i``` to install all required package dependencies locally
- Run ```npm run start``` to start the api dev server

You will now be able to access the webapp in your browser at: <http://localhost:5173/> and the api at <http://localhost:10000/>.

## Notes

I used the NestJS Swagger plugin to produce a small and brief swagger doc which you can see at <http://localhost:10000/api>.

I also wrote two very small tests, one unit test the controller and another as an end-to-end test. See the package.json in the backend to view npm scripts that allow you to run these tests.

## Possible Improvements

- Testing for frontend components and behavior.
- More testing in the backend service.
- Add Theme to avoid repetition of CSS in web app ui
- Better management of routing and state
- Progressive form behavior not ideal when using browser to go back and forth between pages.
- Extend api and ui to allow for users to access their I&E Rating
- Add some insight and tracking via a graph to see how this has changed over time
- Above will need a db connection to store data per user.
- Validation on the input fields, validation on the api endpoint to avoid malicious and unwanted strings being passed into the server.
- authorization/authentication of requests to avoid unwanted access to the endpoint
