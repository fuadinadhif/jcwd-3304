# NOTES

1. Buat folder `apps`
2. Buat folder `apps/api`: Isi dengan setup Express.js project
3. Buat folder `apps/web`: Isi dengan setup Next.js project
4. Arahkan terminal ke root folder (`apps`) dan jalankan perintah `npm init -y` untuk membuat file `package.json`
5. Install `turborepo` dengan perintah `npm install turbo`
6. Setup `workspaces`, `scripts`, dan `packageManager` di file `package.json` di root folder
7. Kurang lebih seperti ini (sesuaikan dengan kebutuhan/versi project kalian):

   ```json
   {
     "name": "08-project-setup",
     "version": "1.0.0",
     "description": "",
     "scripts": {
       "build": "npx turbo run build",
       "check-types": "npx turbo run check-types",
       "dev": "npx turbo run dev",
       "lint": "npx turbo run lint",
       "start": "npx turbo run start"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "type": "module",
     "workspaces": ["apps/*"],
     "packageManager": "npm@11.3.0",
     "dependencies": {
       "turbo": "^2.5.3"
     }
   }
   ```

8. Buat file `turbo.json` di root folder
9. Setup `turbo.json` dengan script berikut:
   ```json
   {
     "$schema": "https://turborepo.com/schema.json",
     "ui": "tui",
     "tasks": {
       "build": {
         "dependsOn": ["^build"],
         "outputs": [".next/**", "!.next/cache/**", "dist/**"]
       },
       "check-types": {
         "dependsOn": ["^check-types"]
       },
       "dev": {
         "dependsOn": ["^dev"],
         "persistent": true,
         "cache": false
       },
       "lint": {
         "dependsOn": ["^lint"]
       },
       "start": {
         "dependsOn": ["build"],
         "cache": false
       }
     }
   }
   ```
