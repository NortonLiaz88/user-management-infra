# User Management Infrastructure

## Running repository infrastructure stack

To run the User Management project infrastructure stack, run the following command (this command allows to follow the stack logs):
> docker compose up

If you want to run in detached mode:
> docker compose up -d

To shut down the stack, run the following command:
> docker compose down

## Stack explained

### Postgres

Relational database used for transactional environment. Contains all data used in the project applications: mobile and web.

### PgAdmin

Workbench-like application to allow Postgres debug in development environment.

### Inicialização do banco

```shell
npx prisma generate
yarn migrate
yarn seed
```
