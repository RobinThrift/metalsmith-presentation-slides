---
title: Build.js 2
num: 50
---

###Make it useful!

`src/index.md`
```markdown
---
title: Home
---
##My Page

This is some content!
```


[fragment]
```
$ npm install -D metalsmith-markdown
```

```js
var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown');

Metalsmith(__dirname)
    .use(markdown())
    .destination('./build')
    .build();
```
```
$ node build.js
```
[/fragment]

[fragment]
`build/index.html`
[/fragment]