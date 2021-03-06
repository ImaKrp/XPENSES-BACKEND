# XPENSES - `with Node.js n' Prisma`

> This is a small personal project, helping to track your finances:

- [XPENSES - `with Node.js n' Prisma`](#xpenses---with-nodejs-n-prisma)
  - [π¨ ο½ Install Dependencies](#--install-dependencies)
  - [πββοΈ ο½ Run Migrations](#οΈ--run-migrations)
  - [π₯ ο½ See Data](#--see-data)
  - [π¨βπ» ο½ Launch Backend](#--launch-backend)
  - [π ο½ License](#--license)

## π¨ ο½ Install Dependencies

> infos:

1. This one is really simple, let's go for it.

Install all Dependencies:

```sh
yarn
```

And you're ready to go.

---

## πββοΈ ο½ Run Migrations

> infos:

1. you can visualize the migrations in /prisma/migrations.

Run them:

```sh
yarn prisma migrate dev
```

And your database is setted.

---

## π₯ ο½ See Data

> infos:

1. Prisma has great ways to verify the data.

Start Prisma Studio:

```sh
yarn prisma studio
```

And json server will be launched on http://localhost:8000

---

## π¨βπ» ο½ Launch Backend

> infos:

1. On compile it will start the backend on localhost.
2. It will be acessible at http://localhost:8000.

```sh
yarn start
```

You can see all the routes on insomnia_XPENSES.json.

---

## π ο½ License

Copyright Β© 2021 [JΓΊlio Carvalho GonΓ§alves](https://github.com/ImaKrp).
This project is [GNU General Public License v3.0](https://github.com/ImaKrp/XPENSES-BACKEND/blob/master/LICENSE) licensed.
