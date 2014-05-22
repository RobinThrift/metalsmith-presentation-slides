---
title: EndBuild File
num: 181
---

```js
Metalsmith(__dirname)
    .use(collections({
        blog: {
            pattern: '*/posts/*',
            oderBy: 'date',
            revers: true
        },
        pages: {
            pattern: '*/pages/*'
        }
    }))
    .use(markdown())
    .use(autoTemplate({
        pattern: 'posts/',
        templateName: 'post.hbt'
    }))
    .use(permalinks({
        pattern: ':collection/:title'
    }))
    .use(templates('handlebars'))
    .destination('./build')
    .build(function(err) {
        if (err) { throw err; }
    });
```