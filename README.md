# React Modal

A simple react js modal application using useState hook and redux toolkit.

# Description

This application allows users to display a modal on the screen. The modal can be opened by clicking on a button and can be closed by clicking on a button, backdrop layer or esc button on keyboard. There are two versions of the application: one that uses the useState hook (on the modal/useState branch) and another that uses Redux Toolkit (on the modal/redux-toolkit branch).

In the useState version, the modal state is managed using the useState hook. The modal component is rendered conditionally based on the state value, and the state is updated using a function that toggles the value between true and false.

In the Redux Toolkit version, the modal state is managed using Redux Toolkit's createSlice function. The modal component is connected to the store using the useSelector and useDispatch hooks, and the state is updated using a reducer function that toggles the value between true and false.

Both versions of the application demonstrate how to create a simple modal component and manage its state using either the useState hook or Redux Toolkit.

# Usage

## Using the useState version

Clone the repository and switch to the "modal/useState" branch.
Run `npm install` to install the necessary dependencies.
Run `npm start` to start the application.
The modal component will be displayed on the screen. Clicking the "Open Modal" button will open the modal, and clicking the "Close Modal" button will close it.

## Using the Redux Toolkit version

Clone the repository and switch to the "modal/redux-toolkit" branch.
Run `npm install` to install the necessary dependencies.
Run `npm start` to start the application.
The modal component will be displayed on the screen. Clicking the "Open Modal" button will open the modal, and clicking the "Close Modal" button will close it.
