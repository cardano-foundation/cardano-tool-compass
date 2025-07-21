## Tool Compass – Your Smart Guide to Cardano Blockchain Data 🧭

Tool Compass is your go-to assistant for navigating the diverse and often overwhelming ecosystem of Cardano blockchain data solutions. From direct node interfaces to robust chain indexers, streamlined API providers,  powerful off-chain SDKs and fully managed BaaS platforms — Tool Compass helps you find exactly what fits your project’s technical and architectural needs. It provides clear, tailored recommendations, a step-by-step workflow to guide your choices, and a rich library of practical blueprints for common dApp scenarios. Tool Compass eliminates the need for exhaustive research, helping you quickly identify and integrate the right tools so you can concentrate on building scalable, high-impact Cardano applications.

## Getting Started 🚀

This is Next project that generates static pages based on `.mmd` file and `yml` files

To start development mode run:
```
npm install
npm run dev

# goto http://localhost:3000
```

To build static pages run: `npm run build` generated files can be find in `/out` directory

## Mermaid structure 🧬

Flow chart is generated based on `questionnaire.mmd` file.

### Behaviour:

- **Blocks with external links** automatically redirect users to external page. For example `https://github.com`
- **Blocks with relative links** point to directories in `/storage/solutions`. For example `java` will point to `/storage/solutions/java`. This block will display solutions page with technologies stored in `.yml` files in `/storage/solutions/java` directory

## YML files

Additional data is stored in yml files.

If you want to add additional data to a mermaid block just add `[mermaidBlockId].yml` to `/storage/questions`

**The block yml** file accepts:
- pros: string[]
- cons: string[]
- usuallyUsed: string[]
- toolsAndUseCases: {title: string, text: string}[]

If you want to add information about solutions just add `[technologyName].yml` to `/storage/questions/[technology]` and link it in `.mmd` file

**The solution yml** file accepts:
- name: string
- description: string
- pros: string[]
- cons: string[]
- url: string

## Environment file 🌱
In .env file you can specify:

- **FIRST_QUESTION_URL** - should point to the first question. This is used to automatically redirect user to first question when he enter `index.html` and is also used on `Start over` button 
- **CLOSE_URL** - should point to cardano-foundation page I set it to `https://cardanofoundation.org/ledger-sync`. It is used when user clicks `X` button in the top navigation


