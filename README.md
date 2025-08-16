# WorldWise - Track Your Adventures

WorldWise is a React application that allows you to track the cities and countries you've visited around the world. It provides an interactive map to visualize your travels and a simple interface to log your trips. This project is built with modern web technologies, including React and Vite, for a fast and efficient user experience.

## Table of Contents

  - [Features]
  - [Tech Stack]
  - [Project Structure]
  - [Getting Started]
      - [Prerequisites]
      - [Installation]
  - [Usage]
  - [Contributing]
  - [License]

## Features

  - **Interactive Map**: Visualize the cities you've visited on a world map.
  - **City and Country Tracking**: Easily add new cities and countries to your list of travels.
  - **Trip Details**: Keep notes and dates for each of your trips.
  - **Fast Development**: Built with Vite for a fast and modern development experience with Hot Module Replacement (HMR).
  - **Clean Codebase**: Includes ESLint rules to maintain code quality and consistency.

## Tech Stack

  - **Frontend**: React
  - **Build Tool**: Vite
  - **Styling**: CSS
  - **Linting**: ESLint

## Project Structure

The project is organized with a clear and logical structure to make it easy to navigate and maintain.

```
/
├── data/              # Contains sample data, like a list of cities
├── public/            # Static assets (images, fonts, etc.)
├── src/               # Main source code for the application
│   ├── assets/        # React-specific assets
│   ├── components/    # Reusable React components
│   ├── pages/         # Page components for different routes
│   └── App.jsx        # Main application component
├── .eslintrc.cjs      # ESLint configuration file
├── .gitignore         # Git ignore file
├── index.html         # The main HTML file for the Vite app
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite configuration file
```

## Getting Started

Follow these steps to get a local copy of the project up and running for development and testing.

### Prerequisites

  - [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
  - [npm](https://www.npmjs.com/) (or yarn/pnpm)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shoaib713343/worldwise.git
    cd worldwise
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be running on `http://localhost:5173` (or the next available port).

## Usage

Once the application is running, you can start tracking your travels. Click on the map to add a new city, or use the sidebar to browse and manage your list of visited locations.

## Contributing

Contributions are welcome\! If you have any ideas, suggestions, or bug fixes, please open an issue or submit a pull request.

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`).
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`).
4.  Push to the Branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.
