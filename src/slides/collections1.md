---
title: Collections
num: 100
---

###Collections

```
$ npm install -D metalsmith-collections
```

[fragment]
`build.js`
```js
    // ...
    .use(collections({
        blog: {
            pattern: '*/posts/*',
            oderBy: 'date',
            reverse: true
        },
        pages: {
            pattern: '*/pages/*'
        }
    }))
    // ...
```
[/fragment]
