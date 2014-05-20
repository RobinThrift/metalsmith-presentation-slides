---
title: PreProc 1
num: 180
---

###Preprocessing

```
$ npm install -D metalsmith-sass metalsmith-coffee
```

```js
// ...
    .use(sass({
        outputStyle: 'compressed'
    }))
    .use(coffee())
// ...
```

[fragment]
All other static files (images, fonts, etc.) are just copied over (including folder structure)
[/fragment]
