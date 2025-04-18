# Helpdesk API servisas

## REST
REST [folder](./REST) is for testing routes using VS Code REST Client [extension](https://marketplace.visualstudio.com/items/?itemName=humao.rest-client)

No sensitive info should be left inside rest files when pushing to git, either name files like this **local.auth.rest** or add them to the [.gitignore](./.gitignore)

## Prisma
[Setup](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction)

**Useful commands**
-   `npx prisma generate` - generate/re-generate Prisma Client [ref1](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#generate) [ref2](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction#5-evolving-your-application)
-   `npx prisma db push` - push the state of Prisma schema to the database without using migrations [ref](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#db-push)
-   `npx prisma migrate dev` - generate a new migration [ref](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-dev) (during local dev probably better to just use db push command)
