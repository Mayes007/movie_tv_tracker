# Movie & TV Show Tracker

This application is a media tracking tool built with React and Vite, utilizing PocketBase as a lightweight backend. It allows users to maintain a personal database of movies and TV shows they have watched or plan to watch, ensuring a fast and responsive experience.

## Instructions for Build and Use

Steps to build and/or run the software:

1. **Install PocketBase**: Download the PocketBase executable for your OS and place it in the project root.
2. **Start Backend**: Run `./pocketbase serve` in your terminal to start the database and API.
3. **Install Dependencies**: Open a second terminal and run `npm install`.
4. **Run Frontend**: Execute `npm run dev` to start the Vite development server.

Instructions for using the software:

1. **Access the App**: Open your browser to the local URL provided by Vite (usually `localhost:5173`).
2. **Add Media**: Use the "Add" button to input a new movie or TV show title and details.
3. **Update Status**: Click on a media item to toggle its status between "Watchlist," "Watching," and "Completed."

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* **Node.js**: v20.x or higher
* **React**: v18.x (via Vite)
* **PocketBase**: v0.20.x or higher
* **npm**: v10.x or higher

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Vite Documentation](https://vitejs.dev/guide/)
* [PocketBase Documentation](https://pocketbase.io/docs/)
* [React Docs - Managing State](https://react.dev/learn/managing-state)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] Implement an external API (like TMDB) to auto-populate movie details.
* [ ] Add a user authentication system for private watchlists.
* [ ] Create a "Favorites" category with custom sorting options.

