---
title: Make It Beautiful!
num: 60
---

###Make It Beautiful!

[fragment]
`templates/index.hbt` 
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>{{ title }} | Metalsmith Page</title>
    <link rel="stylesheet" 
        href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body>
    <div class="main-wrapper">
        {{{ contents }}}
    </div>

</body>
</html>
```
[/fragment]

[fragment]
```markdown
---
title: Home
template: index.hbt
---
```
[/fragment]