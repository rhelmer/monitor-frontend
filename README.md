# Monitor front-end using React and Next.js

## Requirements

    - PostgreSQL 14
    - Node 18

## Install

```sh
npm install
```

## Run developer mode

```sh
npm run dev
```

## Spike notes

- Can reuse code from Express app
    - Can take most/all of important controller logic
    - Can take most/all of model (Postgres)
    - Views and styles need to be converted from templates to React components

- Need Session persistence with Redis
    - https://www.npmjs.com/package/next-session maybe
- Need breach data in Redis
- Maturity of next-auth
    - Cannot specify redirect URL for instance
    - We can try to re-use what Relay is doing possibly


Open Questions:

- Should we continue to use KNEX for db models?
    - We could reuse existing Express code in next.js
- Do we want to use SSR or SSG?
    - Auth options are different https://nextjs.org/docs/pages/building-your-application/routing/authenticating
    - How does Relay do it? How would it work if they were to start over?

Next steps:

- Backend
    - Shrink down Express app to just data ingestion + email
        - Maybe we could just run this in k8s alongside our current express JS app now to help availability
    - Port current Monitor code:
        - Db models / migration
        - Anything relevant from controllers
- Frontend
    - Convert current Figma mocks to React components
    - Implement fxa+subplat
        - Port from Relay if possible
