## Local setup

### Install NPM dependencies

```bash
npm install
```

### Create `.env` variable

```bash
cp .env.example .env
```

Set env variables.

### Ensure API server is running

Make sure the [API](https://github.com/sajadtorkamani/hangman-api) is running at the URL specified by `REACT_APP_WORD_API_URL`.

### Start dev server
```bash
npm start
```

## Deployment

Pushes to the `master` branch are automatically deployed to [hangman-game.sajadtorkamani.com](hangman-game.sajadtorkamani.com) via Netlify.

Make sure the env variables specified in `.env.example` are set in the Netlify deploy settings (Build & Deploy > Environment).