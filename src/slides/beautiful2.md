---
title: Make It Beautiful!
num: 70
---

```
$ npm install -D metalsmith-templates handlebars
```
<small>(uses [consolidate.js](https://github.com/visionmedia/consolidate.js))</small>


`build.js`
```js
// ...
    templates = require('metalsmith-templates');

Metalsmith(__dirname)
    .use(markdown())
    .use(templates('handlebars'))
// ...
```