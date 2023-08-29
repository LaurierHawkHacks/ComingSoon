<div align="center">

```
                      _                     _        
  /\  /\__ ___      _| | __ /\  /\__ _  ___| | _____ 
 / /_/ / _` \ \ /\ / / |/ // /_/ / _` |/ __| |/ / __|
/ __  / (_| |\ V  V /|   </ __  / (_| | (__|   <\__ \
\/ /_/ \__,_| \_/\_/ |_|\_\/ /_/ \__,_|\___|_|\_\___/

2024

```
                                                     

![GitHub](https://img.shields.io/github/license/LaurierHawkHacks/ComingSoon?style=flat-square)

#### The official coming soon page for HawkHacks - see [here](https://hawkhacks.ca).


</div>


## Quick Setup :hammer:

> Install Node.js
```sh
https://nodejs.org/en/download/
```

> Install pnpm using npm
```sh
$ npm install -g pnpm
```

> Clone the repo
```sh
$ git clone https://github.com/LaurierHawkHacks/ComingSoon.git
```

> From your terminal, navigate to the root path of clone
```sh
$ cd path/to/your/clone
```

> Install dependencies
```sh
$ pnpm i
```

> Run local server
```sh
$ pnpm run dev
```

## Expanding the ESLint configuration 🗒️

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Contributing 🥇
- We welcome all contributions for further information see [here](https://github.com/LaurierHawkHacks/Landing/blob/main/CONTRIBUTING.md)
