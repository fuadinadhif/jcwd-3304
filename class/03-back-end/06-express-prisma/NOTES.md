# NOTES

## Steps

1.  `npm init --y`
    ```json
    {
      "name": "06-express-prisma",
      "version": "1.0.0",
      "description": "",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "type": "module"
    }
    ```
2.  `npm i -D typescript tsx prisma @types/node @types/express`
3.  `npm i express @prisma/client`
4.  `npx tsc --init`
5.  `npx prisma init`
6.  `npx prisma db push`
7.  `npx prisma migrate dev`
8.  `npx prisma studio`
