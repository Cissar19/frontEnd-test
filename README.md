# About this proyect

This project was made for a test on apply digital. In general lines, an API must be consumed and printed on the screen with some filters such as favorites, pagination and query. This project was made in reactjs.

## Getting Started

The project was created with the command "npx create react app". To start the project, you must use the "npm i" command to install the node modules and then with the "npm start" command start the project on localhost. Generally the project starts on port 3000 unless another project is already running. if so, it will run in another port.

## Project Organization

The project is organized into components. This is why inside the src folder you will find the components folder.In this folder (components) are all the components that will be rendered in App.jsx.

The main components are News.jsx and NewsListContainer.jsx

## About the components

-Buttons.jsx:
-There are the buttons that refer to favorites and all the news

-Header.jsx:

    -In this component there is only the header of the web page

-NewsListContainer:

    -The request to the API is made through Fetch with Asynchrony, specifically Async and await. At the same time, a status hook is used to correctly handle the filling of the news array that will later be iterated with a map.

    -You can also find a select, this has the function of making the dropdown menu for the user.

    -A map was made to iterate an array containing the news hits. The New.jsx component is called to send through props the destructuring of the object stored in the NewList array.

    -The MaterialUI library was installed to apply the pagination.

-New.js:

    -This component does nothing more than print on the screen the props that were sent from the NewsListContainer.jsx component.

    -The time Ago library is applied to meet the requirement. This is applied in the prop that corresponds to the date of the new.

    -Once the properties are received, they are printed on the screen

## Hooks in the components

The react hooks used in this project were: useState, useEffect

## Hook functionalities

The functionalities of these hooks were used for:

The state hook, useState was used mostly in the NewsListContainer component because it was important to update the state of a variable. For example, it was used in the pages variable. So that when the user clicks on the pagination. Doing this will change the value of the page variable, located in the url. This generated that a new request was made to the api but from another page.

The useEffect component was used to respect The Component Lifecycle, since if it was not done. It would render infinitely, saturating the page and the api. That is to say that with this hook we control the life cycle of the call to the api.
