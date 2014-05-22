---
title: PLugins 4
num: 160
---


```js
var autoTemplate = function(opts) {
    var pattern = new RegExp(opts.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            if (pattern.test(file)) {
                var _f = files[file];
                if (!_f.template) {
                    _f.template = opts.templateName;
                }
            }
        }
        done();
    };
};
```

[fragment]
```js
    //...
    .use(autoTemplate({
        pattern: 'posts',
        templateName: 'post.hbt'
    }))
    //...
```
[/fragment]
