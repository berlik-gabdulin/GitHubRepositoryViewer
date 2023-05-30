# GitHub Repository Viewer

This is a simple web application that allows you to search for repositories on GitHub and view detailed information about them. The application is built using React, TypeScript, and GraphQL, utilizing the GitHub GraphQL API to fetch repository data.

## Features

- Search for repositories by name
- Pagination to navigate through multiple pages of search results
- View detailed information about a specific repository
- Responsive design for optimal viewing on different devices

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone [repository-url]`
2. Install dependencies: `npm install`
3. Set up GitHub personal access token:
   - Go to [GitHub settings](https://github.com/settings/tokens) and generate a personal access token with the `repo` scope.
   - Create a new file `.env` in the root directory of the project.
   - Add the following line to the `.env` file: `REACT_APP_GITHUB_TOKEN=your-access-token`
   - Replace `your-access-token` with the personal access token you generated.
4. Start the development server: `npm start`
5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Project Structure

The project follows a modular structure, with each module responsible for a specific functionality:

- **components**: Contains reusable UI components used throughout the application.
- **store**: Includes the Redux store configuration and slices for managing repository data and pagination.
- **api**: Contains the functions for making GraphQL API requests to the GitHub API.
- **graphql**: Defines the GraphQL queries used to fetch repository data from GitHub.
- **pages**: Contains the main application pages, including the home page with the repository search functionality and the repository detail page.

## Implementation Details

### Search Repositories

The search functionality allows you to search for repositories by name. As you type in the search input field, the application sends a GraphQL query to the GitHub API, retrieving the matching repositories. The search results are displayed in a list format, showing the repository name, star count, last commit date, and a link to the repository on GitHub. Pagination is available to navigate through the search results.

### Repository Details

Clicking on a repository name in the search results redirects you to the repository detail page. The detail page shows detailed information about the repository, including the repository name, star count, last commit date, owner information, languages used in the repository, and a description.

### Pagination

The pagination feature allows you to navigate through multiple pages of search results. By default, the application fetches 100 repositories from GitHub and displays 10 repositories per page. The pagination component updates the current page in the Redux store, triggering a new GraphQL query to fetch repositories for the selected page. This approach minimizes the number of requests to the GitHub API by fetching a larger set of repositories upfront.

### Styling

The application uses Emotion CSS-in-JS library for styling. Custom styles are defined for each component using Emotion's styled components. The styles focus on creating a clean and modern user interface with smooth animations, pastel color palette, and responsive design.

## Conclusion

The GitHub Repository Viewer is a React application that utilizes the GitHub GraphQL API to search and view repositories on GitHub. It provides a user-friendly interface for searching repositories, viewing their details, and navigating through search results using pagination. The application demonstrates the usage of GraphQL queries, Redux for state management, and Emotion for styling. Feel free to explore and enhance the application further based on your needs and requirements.

If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding!
