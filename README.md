# MyReads Project

This is one of the Udacity FEND project. Udacity My Reads App. This app allows user to place selected books into a designated shelf. The Main page has the Currently Reading, Want To Read, Read and Search.
Based on the selected option from the dropdown the books are moved into the designated shelf. The search page will allow the user to search for books.

The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.


# Project Specifications
## Required

###### Application Setup
1. Application easy to install and start.
   - install all project dependencies with npm install
   - start the development server with npm start
2. Application includes README with clear installation and launch instructions

## Main Page

 - The main page shows 3 shelves for books.
 - The main page shows a control that allows users to move books between shelves. The control     should be tied to each book instance.
 - Information persist between page refreshes i.e. when the browser is refreshed, the same information is displayed on the page.

 ## Search Page
 - The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
 - Search results on the search page allow the user to select "currently reading", "want to read", or "read" to place the book in a certain shelf.
 - When an item is categorized on the search page, and the user navigates to the main page, it appears on that shelf in the main page.

# Routing
 The main page contains a links to Currently Reading, Want to Read, Read and  search page. 

# Backend Server
The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:

- getAll
- update
- search

## getAll
Method Signature:

## getAll()
- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.


## update

Method Signature:

## update(book, shelf)
- book: <Object> containing at minimum an id attribute
- shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

## search

Method Signature:

## search(query)

- query: <String>
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

# Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


