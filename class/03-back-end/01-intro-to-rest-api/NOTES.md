# NOTES

## Inisiasi Node Project

1. `npm init --y`
2. 2.1 `npm i -D typescript @types/node`
   2.2 `npm i --save-dev typescript @types/node`
3. `npx tsc --init`
4. Setup `tsconfig.json` file with the following content:
   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "NodeNext",
       "moduleResolution": "nodenext",
       "outDir": "./dist",
       "esModuleInterop": true,
       "forceConsistentCasingInFileNames": true,
       "strict": true,
       "skipLibCheck": true
     }
   }
   ```
5. Make scripts in `package.json`:
   ```json
   "scripts": {
     "build": "npx tsc",
     "start": "npm run build && node dist/index.js"
   }
   ```

## Explanation

- `npm init --y`: Initializes a new Node.js project with default settings.
- `package.json`: Contains metadata about the project, including dependencies and scripts.
- `pckage-lock.json`: Automatically generated file that locks the versions of dependencies.
- `node_modules`: Directory where installed packages are stored.
- `npx tsc --init`: Initializes a TypeScript configuration file (`tsconfig.json`).
- `tsconfig.json`: Configuration file for TypeScript compiler options.
- `tsc`: TypeScript compiler command.

```

```
