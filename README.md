# React Redux Shopping List App

A small React.js application demonstrating the setup and structure of a web application. The app allows users to add new items by shop, view and manage the shopping list, and ensures a pixel-perfect UI based on design specifications.

## Table of Contents

- [Project Setup](#project-setup)
- [Dependencies](#dependencies)
- [Folder Structure](#folder-structure)
- [Components and Features](#components-and-features)
- [Design](#design)
- [Testing](#testing)
- [General Considerations](#general-considerations)
- [Notes](#notes)
- [Usage](#usage)

## Project Setup

1. **Create React App:**

   - Set up a new React app using Create React App or your preferred boilerplate.
   - Initialize a Git repository for version control.

2. **Folder Structure:**
   - Organize your project structure. A possible structure might be:
     ```
     /src
        /actions
        /assets
        /components
        /pages
        /reducers
        /store
        /tests
     ```

## Dependencies

1. **React and TypeScript:**

   - Make sure to use TypeScript for static typing in your React components.

2. **Redux with Thunks:**

   - Set up Redux and Thunks for state management.
   - Create actions, reducers, and thunks for managing the shopping list state.

3. **Sass Preprocessor:**

   - Integrate Sass for styling your components.
   - Use variables, mixins, and other features to maintain a clean and organized stylesheet.

4. **Jest and React Testing Library:**
   - Write unit or integration tests for your React components.
   - Ensure good code coverage.

## Components and Features

1. **Adding New Item by Shop:**

   - Create a form component for adding new items.
   - Implement form validation using native HTML validations.
   - Use native HTML dropdowns for shop selection.
   - Fetch data from `shops.json` for shop options.

2. **Showing/Managing The List:**
   - Display the list of items.
   - Implement the delete functionality for each item.
   - Ensure items disappear from the list after deletion.
   - Order the list based on the "sortOrder" property.

## Design

1. **Pixel-Perfect UI:**
   - Use SCSS to style your components and achieve a pixel-perfect UI based on the design file.
   - Pay attention to responsive design principles.

### Dashboard

![Dashboard](/images/dashboard.jpg)

### Shopping Cart

![Shopping Cart](/images/shopping-cart.jpg)

### Settings

![Settings](/images/settings.jpg)

## Testing

1. **Unit/Integration Tests:**
   - Write tests for your React components using Jest and React Testing Library.
   - Test the functionality of adding items, deleting items, and the order of the list.

## General Considerations

1. **Good Design/Development Principles:**

   - Follow best practices for React development.
   - Write clean, maintainable, and modular code.

2. **Documentation:**

   - Provide clear and concise documentation for your code.
   - Include instructions on how to run the application and tests.

3. **Cross-Browser Compatibility:**
   - Ensure the application works well in the latest versions of Chrome, Firefox, and Safari.

## Usage

Provide instructions on how to run the application locally.

```bash
# Clone the repository
 git clone https://github.com/shayan6/shopping-cart-app.git

# Navigate to the project directory
cd shopping-cart-app

# Install dependencies
npm install

# Run the application
npm start
```

## Notes

- **Data Persistence:**
  - The application utilizes `localStorage` for data persistence. This means that the shopping list will be saved between sessions. Users can close and reopen the application without losing their added items.

- **Browser Compatibility:**
  - The application has been tested and is compatible with the latest versions of Chrome, Firefox, and Safari (on macOS devices).

## Contact

If you have any questions or concerns, feel free to reach out via email:

- Project Maintainer: [shayanshaikh996@gmail.com](mailto:shayanshaikh996@gmail.com)
