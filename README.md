# XPENSES - `with Node.js n' Prisma`

> This is a small personal project, helping to track your finances:

- [XPENSES - `with Node.js n' Prisma`](#xpenses---with-nodejs-n-prisma)
  - [🔨 ｜ Install Dependencies](#--install-dependencies)
  - [🏃‍♂️ ｜ Run Migrations](#️--run-migrations)
  - [📥 ｜ See Data](#--see-data)
  - [👨‍💻 ｜ Launch Backend](#--launch-backend)
  - [📝 ｜ License](#--license)

## 🔨 ｜ Install Dependencies

> infos:

1. This one is really simple, let's go for it.

Install all Dependencies:

```sh
yarn
```

And you're ready to go.

---

## 🏃‍♂️ ｜ Run Migrations

> infos:

1. you can visualize the migrations in /prisma/migrations.

Run them:

```sh
yarn prisma migrate dev
```

And your database is setted.

---

## 📥 ｜ See Data

> infos:

1. Prisma has great ways to verify the data.

Start Prisma Studio:

```sh
yarn prisma studio
```

And json server will be launched on http://localhost:8000

---

## 👨‍💻 ｜ Launch Backend

> infos:

1. On compile it will start the backend on localhost.
2. It will be acessible at http://localhost:8000.

```sh
yarn start
```

You can see all the routes on insomnia_XPENSES.json.

---

## 📝 ｜ License

Copyright © 2021 [Júlio Carvalho Gonçalves](https://github.com/ImaKrp).
This project is [GNU General Public License v3.0](https://github.com/ImaKrp/XPENSES-BACKEND/blob/master/LICENSE) licensed.
