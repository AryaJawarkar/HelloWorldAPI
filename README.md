
# Hello World API

This project provides a simple API implementation that delivers a "Hello World" greeting in multiple languages (English, French, and Hindi) based on the user's selection. The application consists of:

A frontend (HTML, CSS, and JavaScript) that allows users to select a language and display the greeting.
A backend built with Node.js and Express.js to serve the greetings.

## Website Link
[link](https://helloworldapi-1.onrender.com)
## Features

- Supports greeting in three languages: English, French, and Hindi.
- Displays the greeting dynamically in the frontend based on user input.
- Implements CORS for smooth communication between the frontend and backend.


## Prerequisites

To deploy and run the project locally, ensure you have the following installed:

Node.js (version 14 or later)
npm (comes with Node.js)
A modern web browser
    
## Deployment

Steps to Deploy and Run
1. Clone the Repository
Clone the project to your local machine:

bash
```
git clone https://github.com/AryaJawarkar/HelloWorldAPI.git
or
If Zip file Downloaded 
Extract/Unzip it first

cd HelloWorldAPI-master
```

2. Install Backend Dependencies
Navigate to the project directory and install dependencies for the backend:

bash
```
cd backend 
npm install
npm install cors
```

3. Start the Backend Server
Run the backend server using:

bash
```
node server.js
This starts the API at http://localhost:5000.
```

4. Open the Frontend
Open the index.html file in your browser.
Use the dropdown menu to select a language and click the Greet button.



## API Endpoint

GET /hello

This endpoint returns a greeting in the selected language.

Parameters

Parameter	| Type	| Description

language	| string	| The language for the greeting.

Supported Values for language
- English
- French
- Hindi

Example Request
http
```
GET http://localhost:5000/hello?language=English
```
Example Response
json
```
{
  "message": {
    "ID": "A123456789",
    "greet": "Hello world"
  }
}
```
Error Response
If the language is not supported:

json
```
{
  "error_message": "The requested language is not supported"
}
```


## Frontend

The frontend dynamically fetches and displays the greeting using the API.

###  Key Files
- index.html: The structure and interface.
- index.css: Styles for the frontend UI.
- index.js: Contains the logic to call the API and display the greeting.

