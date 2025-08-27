# Investment Calculator (React)

[Live Demo](https://react-investment-calculator-pied.vercel.app/)

## Project Purpose
This project demonstrates my learning and understanding of React fundamentals by building an interactive investment calculator. The goal is to showcase key React concepts such as component structure, state management, props, event handling, and conditional rendering.

## Features
- **User Input Form:**
  - Users can enter initial investment, annual investment, expected interest rate, and investment duration.
  - Inputs are managed via React state and updated dynamically.
- **Results Table:**
  - Calculates and displays yearly investment growth, interest earned, total interest, and invested capital.
  - Uses a utility function to process user input and generate results.
- **Component-Based Architecture:**
  - The app is split into reusable components (`Header`, `UserInput`, `Results`).
- **Data Flow:**
  - Props are used to pass data and event handlers between components.
  - State is lifted to the top-level component for centralized management.

## What Learned From This Project
- Creating and organizing React components
- Managing state and props
- Handling user events and form inputs
- Passing data between components
- Using utility functions for calculations
- Rendering lists and tables dynamically

## How to Run
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open your browser at `http://localhost:5173` (or the port shown in the terminal).

## Folder Structure
- `src/components/` - React components
- `src/util/` - Utility functions for calculations
- `public/` - Static assets

## Technologies Used
- React
- Vite (for development/build)
- JavaScript

---
This project is a hands-on demonstration of my React skills and understanding, focusing on practical application and clean code structure.
