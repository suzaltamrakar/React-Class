# React-Class
# How to Start project
- frontend `npm start`
- backend `npx json-server db.json --port=4000`

# Hoe to setup a project
## Frontend 
- git clone "link of github"
- cd "file name"
- `npm install`

## Backend
- Make Api folder
- Make db.json file
- go to 'https://www.npmjs.com/package/json-server' and copy the code of Usage and paste in 'db.json' folder
- `npm i json-server`
- add users data into it
- note that everything must be between `""` seperately 

## Add boiler code in js page
- type `rafce` and hit enter

## Add ant design in your project
- Installation: `npm i antd`

## Add axios design in your project
- Installation: `npm i axios`

## Add react router dom design in your project
- Installation: `npm i react-router-dom`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# --

## Find the PID:
Run the following command to find the process ID for the port your React app is using (e.g., port 3000):
`netstat -ano | findstr :3000`

### You should see output like:
`TCP    127.0.0.1:3000    0.0.0.0:0    LISTENING    12345`

## Use the PID:
Now, replace <PID> with the actual number (12345 in this example). The correct command will look like:
`taskkill /PID 12345 /F`

## Force Kill:
The `/F` flag forcefully terminates the process.

# Generate boiler plate code
Simply type `rafce` in the new page and get a React Arrow Function Component with ES7 module system (ES7 React/Redux/GraphQL/React-Native snippets)

# Install React Router
Go to https://reactrouter.com/start/library/installation or paste on `npm i react-router` on your terminal

# 