---
title: Definition
num: 20
---
###What is Metalsmith

[fragment]
    `Jekyll + Gulp.js = Metalsmith`
[/fragment]

[fragment]
```js
    Metalsmith(__dirname)
        .use(markdown())
        .use(sass())
        // ...
        .destination('./build')
        .build();
```
[/fragment]