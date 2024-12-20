# PDF Viewer Application

This is a simple web application built to allow users to search for, view, and interact with PDF documents. The project uses **Vite** for fast development setup, **Axios** for API requests, and standard **HTML** and **CSS** for structuring and styling the app.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Running the Project Locally](#running-the-project-locally)
6. [Directory Structure](#directory-structure)
7. [Dependencies](#dependencies)
8. [How to Use the Application](#how-to-use-the-application)

---

## Introduction

The PDF Viewer Application allows users to search for PDF files based on keywords and view them directly in the browser. The application is built using **Vite** for fast development, **Axios** to fetch PDF data, and modern web technologies like **HTML** and **CSS** for a clean, responsive user interface.

---

## Features

- **Search Functionality**: Allows users to search for PDFs based on keywords or titles.
- **PDF Viewer**: View PDFs in an embedded iframe.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **User-friendly Interface**: Simple and intuitive UI/UX.

---

## Technologies Used

This project utilizes the following technologies:

- **Vite**: A modern, fast build tool for frontend development.
- **Axios**: A promise-based HTTP client for making API requests and fetching PDF data.
- **HTML5**: The markup language used for the web page.
- **CSS3**: Used for styling and ensuring the application is fully responsive.
- **JavaScript**: Client-side scripting for interactivity and API integration.

---

## Setup Instructions

Follow the steps below to set up the project locally.

### 1. Clone the Repository

First, clone the repository using the following command:

git clone https://github.com/Arunsingh589/PDF-Viewer-Application.git
cd pdf-viewer-application 2. Install Dependencies
Once you have cloned the repository, install the dependencies by running:

**npm install**

3. Run the Project Locally
   To start the project locally, using command:

**npm run dev**

## Running the Project Locally

Clone the project repository from GitHub.
Install dependencies using npm install.
Start the project by running npm run dev.
Open your browser and navigate to http://localhost:5173.

## Directory Structure

propacity task/
├── public/ # Static files like images, favicon, etc.
├── src/ # Source code
│
│ ├── components/
| |──PdfDetailView.jsx
| |──PdfListView.jsx
│ ├── App.js # Main App component
│ ├── main.js # Entry point for the app
│ ├── index.css # Main CSS file
├── index.html # Main HTML file
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

## Dependencies

The following dependencies are used in this project:

Vite: The build tool used for faster development and optimized production builds.
npm install vite --save-dev
Axios: A promise-based HTTP client for making API requests to fetch PDF data.
npm install axios --save
React: A JavaScript library for building user interfaces.
npm install react react-dom

## How to Use the Application

Search for PDFs:
Use the search bar at the top of the page to enter keywords or titles related to the PDF files.
The application will filter and display the matching PDF files in real-time as you type.

View a PDF:
Click on any PDF card to open it.
The PDF will open in an iframe, where you can scroll through the document and view its content.

Interacting with Cards:
Each PDF is represented by a card that includes its title, description, and a button to view the document.
The PDF cards have hover animations that highlight the card and slightly enlarge it for a more interactive user experience.

Error Handling:
If no matching PDFs are found, the application will display a message saying "No results found."
If there is an issue fetching data from the API, an error message will appear on the screen.
