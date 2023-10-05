# VUE & FIREBASE - CRUD

This project was created following the tutorial from the "Noob dev tutorials" YouTube channel. The original video that served as inspiration can be found at [this link](https://www.youtube.com/watch?v=72uJ04OBojc). We appreciate the creator of the video for providing a valuable resource for learning how to develop Vue.js applications with Firebase.

## Project Description

This project is a CRUD (Create, Read, Update, Delete) application developed in Vue.js, using Firebase as a backend to store and manage tasks. It allows users to perform basic operations on a task list, such as adding new tasks, editing them, and deleting them. Additionally, Tailwind CSS was used for styling.

## How to Test the Project

Follow these steps to test the project in your local environment:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/RickC1218/CRUD-Vue-Firebase-Tasks.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CRUD-Vue-Firebase-Tasks
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Create a project in Firebase at [Firebase Console](https://console.firebase.google.com/).
   - Configure the Firebase database and ensure you have the correct credentials.
   - Copy the Firebase configuration into an `.env` file at the project's root, following the example in `.env.example`. Make sure to fill in the values for `VUE_APP_API_KEY`, `VUE_APP_AUTH_DOMAIN`, `VUE_APP_PROJECT_ID`, `VUE_APP_STORAGE_BUCKET`, `VUE_APP_MESSAGING_SENDER_ID`, and `VUE_APP_APP_ID` with your own credentials.

5. Start the application:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:8080` to see the application in action.

7. Enjoy the application and start managing your tasks!

## Credits

- This project is based on the tutorial by "Noob dev tutorials." You can find more content on their [YouTube channel](https://www.youtube.com/@noobdevtutorials50).

## Application Image
![Presentation_of_app](./src/assets/app.png)