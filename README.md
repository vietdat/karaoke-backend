# karaoke-backend

FeathersJS backend for a karaoke app.

## What it does

- Backend API for the karaoke app (songs, stores, users)
- REST API via FeathersJS / Express
- Configuration in `config/` — production config holds only a host and a `PORT` placeholder, no secrets

## Tech

- JavaScript
- Node.js
- FeathersJS
- Express
- MongoDB (Mongoose)

## Run it

```bash
npm install
npm start
```

Copy `.env.example` to `.env` and set `MONGODB_URI` before starting. For development with auto-reload, use `npm run dev` instead of `npm start`.

## License

Unlicense — see [LICENSE](LICENSE).










