# Movie & TV Show Tracker

This application is a streamlined media tracking tool built with **React** and **Vite**, utilizing **PocketBase** as a lightweight backend. It features a clean, dark-themed UI that allows users to separate their collection into Movies and TV Shows, sorting them by their current progress (Plan, Watching, or Completed).

## Instructions for Build and Use

Steps to build and/or run the software:

1. **Install PocketBase**: Download the PocketBase executable for your OS and place it in the project root.
2. **Setup Database**: 
    - Run `./pocketbase serve` to start the backend.
    - Create a collection named `media` with the following fields: 
        - `title` (Plain text)
        - `type` (Select: movie, tv show)
        - `status` (Select: plan, watching, completed)
3. **Install Dependencies**: Open a second terminal and run `npm install`.
4. **Run Frontend**: Execute `npm run dev` to start the Vite development server.

Instructions for using the software:

1. **Switch Views**: Use the top navigation bar to toggle between the **Movies** and **TV Shows** pages.
2. **Add Media**: 
    - Enter a title in the input field.
    - Use the first dropdown to select the media type (Movie/TV Show).
    - Use the second dropdown to set the initial status (Plan to Watch, Watching, or Completed).
    - Click **Add Media** to save it to your PocketBase collection.
3. **Filter and Sort**: Click the status buttons (**All, Plan, Watching, Completed**) to filter your current view by progress.

## Development Environment

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* **Node.js**: v20.x or higher
* **React**: v18.x
* **Vite**: v5.x
* **PocketBase**: v0.22.x (Backend)
* **npm**: v10.x or higher

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Vite Documentation](https://vitejs.dev/guide/)
* [PocketBase Documentation](https://pocketbase.io/docs/)
* [React Docs - State & Lifecycle](https://react.dev/learn/state-a-components-memory)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] **API Integration**: Connect to TMDB or IMDb API to fetch poster images and descriptions automatically.
* [ ] **Edit/Delete Functionality**: Add buttons to individual media cards to update or remove entries directly from the UI.
* [ ] **User Authentication**: Implement PocketBase Auth to allow multiple users to have private, separate media lists.