# DEV@Deakin Combined Website

This project combines the portfolio website (P3) and the account registration/login functionality (P4) into one React + Vite application.

## Sections on the home page
- Banner and author profile
- Projects
- Featured articles
- Featured tutorials
- Photo gallery
- Subscribe
- Contact

## Account pages
- `/login` — checks the email and password hash against the Firestore `users` collection.
- `/register` — validates the form, hashes the password, and saves the user in Firestore.

## Run the website
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Add your own Firebase web app configuration values to `.env`.
6. In Firebase, create/enable a Firestore database. The registration code stores accounts in the `users` collection.
7. Run `npm run dev` and open the local URL shown in the terminal.

Do not upload your real `.env` file to GitHub. `.env` is ignored by Git.

## Notes
- This is one Vite/React project. Use the combined project's root folder to run it.
- The P3 portfolio components and image assets are kept, and the navigation now includes Login and Sign Up links.
- Registration and login need valid Firebase environment variables and Firestore setup to work.
