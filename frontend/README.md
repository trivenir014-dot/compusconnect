# CampusConnect frontend

React + Vite frontend for the CampusConnect API. It implements the event
discovery, student registrations, and public organizer roster screens from the
design folder. It does not add login, authentication, or authorization.

## Run locally

```bash
npm install
npm run dev
```

The frontend uses `https://compusconnect-adpc.onrender.com` by default. To use a
different API, copy `.env.example` to `.env.local` and set
`VITE_API_BASE_URL` to the API origin (without a trailing slash).

The deployed Flask backend must be redeployed with the CORS change in
`backend/app.py` before a browser can call it from this frontend. CORS allows
all origins by default. To limit it, set `FRONTEND_ORIGINS` on Render to one or
more comma-separated frontend origins.

## Host on Render

The repository-root `render.yaml` defines a Render Static Site. Push the
repository to GitHub, then create a new Blueprint in Render from that
repository. Render builds this folder with `npm ci && npm run build`, publishes
`dist`, and sets the API URL at build time. Render will show the public
`onrender.com` URL after the first successful deploy.

## User ID

There is no account flow. To register or view personal registrations, paste a
UUID from the `users.id` column into the Student ID field. The value is saved in
this browser's local storage and sent to the API as `user_id`.

The database schema does not include event dates, descriptions, venues, or
attendee names, so the UI displays the fields actually provided by the API.
