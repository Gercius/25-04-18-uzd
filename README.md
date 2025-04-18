## Prisma
[Setup](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction)

**Useful commands**
-   `npx prisma generate` - re-generate Prisma Client [ref1](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#generate) [ref2](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction#5-evolving-your-application)
-   `npx prisma db push` - push the state of Prisma schema to the database without using migrations [ref](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#db-push)
-   `npx prisma migrate dev` - generate a new migration [ref](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-dev) (during local dev probably better to just use db push command)
