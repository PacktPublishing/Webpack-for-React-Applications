# MyReads

Simple React app for webpack course

## To run
This project was build using [Yarn](https://yarnpkg.com/en/), however it can be run with NPM only

### If using Yarn:
```
yarn
yarn run start
```

### If using NPM:
```
npm i
npm run start
```

## Project components
```
+--public/    
 |-- index.html - DO NOT MODIFY
 |-- favicon.ico - React Icon, You may change if you wish.
+-- src/
 +-- icons/ - Helpful images for your app. Use at your discretion.
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 +-- Components/ - Contains the created Components
   |-- Book.jsx - Functional component that displays a book object (including the state select options)
   |-- BookShelf.jsx - Functional component that displays a group of books
   |-- Home.jsx - Functional component that displays the Home screen (based on the state of App.js)
   |-- SearchPage.jsx - Component that allows users to query API for new books and handles their status
 |-- App.js - App Root, manages the overall state of the application, and handles most API requests
 |-- App.css - Styles for your app.
 |-- App.test.js - Used for testing. Provided with Create React App.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend.
 |-- index.js - Updated to incorporate React Router
 |-- index.css - Global styles.
|-- .gitignore
|-- README.MD
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms
|-- package.json - npm package manager file.
```


## Backend Server

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
