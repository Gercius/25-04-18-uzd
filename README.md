# Helpdesk API servisas

## Steps to setup and run app
```
git clone https://github.com/Gercius/25-04-18-uzd.git
cd .\25-04-18-uzd\
```

Open code editor and setup .env, example config shown in [example.env](./example.env) file

Create a new database and change provider in [schema.prisma](./prisma/schema.prisma) file accordingly if needed (PostgreSQL is default) [ref](https://www.prisma.io/docs/orm/prisma-schema/overview/data-sources)
```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Then run:
```
npm install
npx prisma migrate dev --name init
npm run dev
```

API documentation endpoint - `/api/doc` ex. `http://localhost:3000/api/doc/`

## REST
REST [folder](./REST) is for testing routes using VS Code REST Client [extension](https://marketplace.visualstudio.com/items/?itemName=humao.rest-client)

No sensitive info should be left inside rest files when pushing to git, either name files like this **local.auth.rest** or add them to the [.gitignore](./.gitignore)

## Prisma
[Setup](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction)

**Useful commands**
-   `npx prisma generate` - generate/re-generate Prisma Client [ref1](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#generate) [ref2](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction#5-evolving-your-application)
-   `npx prisma db push` - push the state of Prisma schema to the database without using migrations [ref](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#db-push)
-   `npx prisma migrate dev` - generate a new migration [ref](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-dev) (during local dev probably better to just use db push command)
