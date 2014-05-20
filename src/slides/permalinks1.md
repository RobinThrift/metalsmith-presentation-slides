---
title: Permalinks
num: 120
---

###Permalinks

```
$ npm install -D metalsmith-permalinks
```

[fragment]
`build.js`
```js
    // ...
    .use(permalinks({
        pattern: ':collection/:title',
        relative: true
    }))
    // ...
```
[/fragment]

[fragment]
`build/pages/about/index.html` <br />
`build/blog/my-first-post/index.html`
[/fragment]
