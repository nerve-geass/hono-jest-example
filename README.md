# A simple test app with a skeleton for honojs and jest
## Getting started for this project

- `npm create hono@latest test-app`
- cd test-app
- #follow the public guide of jest https://jestjs.io/docs/getting-started
- yarn create jest@latest // not mandatory
- yarn add --dev jest
- npm i --save-dev @types/jest // this to use typescript
- add this snippet to package.json
```
  "scripts": {
    ...
    "test": "jest",
    ...
  },
```
- npm install --save-dev babel-jest @babel/core @babel/preset-env
- npm install --save-dev @babel/preset-typescript
- npm install --save-dev @types/jest
- add this snippet to tsconfig
```
"types": [
      ...
      "jest",
      ...
    ],
```
## Run from this repo
```
npm install
npm test
npm run dev
```

```
open http://localhost:3000
```