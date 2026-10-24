# Task P5 — React Newsletter + Task 2 Backend

This project combines the existing React website with the newsletter backend from Task 2.

## Project folders
- `src/`: React frontend
- `backend/`: Express API and Mailchimp/Mailgun integration
- `backend/.env.example`: example configuration names only

## Run the backend
1. Open a terminal in `backend/`.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Add your own Mailchimp and Mailgun values to `backend/.env`.
5. Run `npm start`.

The backend runs on `http://localhost:3000`.

## Run the frontend
1. Open a second terminal in the project root.
2. Run `npm install` if needed.
3. Run `npm run dev`.
4. Open the local URL shown by Vite.

## Important
- Never commit `.env`, API keys, or `node_modules`.
- The frontend currently calls `http://localhost:3000/subscribe` for local testing.
- Replace that URL with your deployed backend URL when deploying.
- Test with an email address authorised by your Mailgun Sandbox if your account uses sandbox mode.
