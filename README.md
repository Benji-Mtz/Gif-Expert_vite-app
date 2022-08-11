## Getting Started

```bash
npm create vite@latest
# or
manually
```

First, run the development server:

```bash
cd project_name
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Eslint config with:

```bash
cd project_name
npm install eslint --save-dev
npx eslint --init

npm install --save-dev eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

npm install -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
```

If everything went well your eslintrc file should look something like this:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {}
}
```

```sh
npm install -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks

touch .prettierrc
```

If you are going to use or you intend to use Jest in your project add the next lines to your ‘env’:

```json
{
    "env": {
        "browser": true,
        "es2021": true,
	"jest": true // Add this line!
    },
	...
}
```

To use prettier alongside with eslint you need to change the extends object:

```json
{
	...
	"extends": [
	  "eslint:recommended",
	  "plugin:react/recommended",
	  "plugin:@typescript-eslint/recommended",
	  "prettier" // Add this line!
	],
	...
}
```

The main part of ESLint is the rules objects. Here you can put any rule you think is good for your project and team.

My basic configuration is this:

```json
{
	...
	"rules": {
        "react/react-in-jsx-scope": "off",
        "camelcase": "error",
        "spaced-comment": "error",
        "quotes": ["error", "single"],
        "no-duplicate-imports": "error"
  },
	...
}
```

To use the plugins we have installed, update the plugins object in the eslintrc file:

```json
"plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
```

The last thing to set up in ESLint is the eslint-import-resolver-typescript. Just add the settings key in the eslint configuration file.

```json
{
	...
	"settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```

Lastly, we are going to set up the .prettierrc file created at the begging of the article.

My basic configuration for prettierrc file is:

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "jsxSingleQuote": true,
  "bracketSpacing": true,
  "endOfLine": "auto",
  "singleAttributePerLine": true
}
```

Finally, we have to add the scripts in the package.json:

```json
{
	...
	"scripts": {
	  ...
	  "lint": "eslint src/**/*.{js,jsx,ts,tsx,json}",
          "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",
          "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
        },
...
}
```
