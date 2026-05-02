# Nuxt Prompt Frontend

Frontend for PromptGo built with Nuxt 4.

## Local development

1. Copy `.env.example` to `.env`
2. Install packages:

```bash
bun install
```

3. Start the dev server:

```bash
bunx nuxi dev --port 3000 --no-fork
```

`--no-fork` is recommended on this Windows setup to avoid `spawn EPERM`.

## Environment

```env
PORT=3000
NUXT_PUBLIC_API_BASE=http://localhost:3001
```

## With Docker

The frontend is started by the backend compose file:

```bash
cd ../nuxt-prompt-api
docker compose up -d --build
```
