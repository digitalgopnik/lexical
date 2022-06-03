# Lexical-Editor

Derived from [@facebook/lexical](https://www.github.com/facebook/lexical), which is MIT licensed. Original README: [https://www.github.com/facebook/lexical/blob/main/README.md](https://www.github.com/facebook/lexical/blob/main/README.md)

* Added typings in following files:
  * ```packages/lexical-list/LexicalList.d.ts```
* TODO: Linebreaks does not insert ```\n``` but only ```\```


## Adding to project

Currently, code is hosted at [https://gitlab.b-ite.net/npm/lexical-editor](https://gitlab.b-ite.net/npm/lexical-editor)

```bash
yarn add git+ssh://git@gitlab.b-ite.net:npm/lexical-editor.git#main
```

## Building and publishing

First, clone [https://gitlab.b-ite.net/forks/lexical-editor](https://gitlab.b-ite.net/forks/lexical-editor) into any folder.

```bash
npm run start:vanilla
```