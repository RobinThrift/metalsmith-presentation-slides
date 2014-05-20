---
title: Build.js 1
num: 40
---

###Show me code!

```js
var Metalsmith = require('metalsmith');

Metalsmith(__dirname)
    .destination('./build')
    .build();
```

This will move everything from `__dirname/src` to `__dirname/build`

[fragment]
Simple enough. <br /> <small>(but kind of useless)</small>
[/fragment]