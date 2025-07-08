# NewsHub

**NewsHub** is a React-based web application that fetches and displays news articles from various sources using the **News API**. It provides a clean and interactive interface for users to browse top headlines and sample news data.

## Preview

### Main Interface
![NewsHub Main Interface](public/news%20hub.png)

### Secondary Interface
![NewsHub Secondary Interface](public/news%20hub%202.png)

## Features

- Fetches top headlines from sources like **CNN**, **BBC News**, and **The Verge**.
- Displays articles in a visually appealing format using custom components like `NewsCard` and `Slider`.
- Handles API errors gracefully by falling back to sample data.
- Loading indicator using the `Ring` component from the `ldrs/react` library.

## Project Structure

```
.env
.github/
  workflows/
    deploy.yml
.gitignore
package.json
public/
  index.html
  manifest.json
  robots.txt
README.md
src/
  App.test.tsx
  App.tsx
  component/
    NewsCard.tsx
    Slider.tsx
  data/
    SampleData.jsx
  index.css
  index.tsx
  react-app-env.d.ts
  reportWebVitals.ts
  setupTests.ts
tailwind.config.js
tsconfig.json
```

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js and npm installed on your system.
- A valid API key for [News API](https://newsapi.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/NewsHub.git
   ```

2. Navigate to the project directory:
   ```sh
   cd NewsHub
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory and add your News API key:
   ```
   REACT_APP_NEWSAPI=your_api_key_here
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.

#### `npm run eject`

Copies all configuration files and dependencies into your project for customization.

## Components

### `NewsCard`

Displays individual news articles with title, description, and image.

### `Slider`

Provides a carousel-like interface for browsing articles.

## Data Handling

### `SampleData`

Contains fallback sample data used when the News API fails.

## Deployment

Refer to the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for instructions on deploying the app.

## Learn More

- [React Documentation](https://reactjs.org/)
- [News API Documentation](https://newsapi.org/docs)

## License

This project is licensed under the **MIT License**.