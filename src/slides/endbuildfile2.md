---
title: EndBuild File
num: 182
---

```json
{
    "source": "src",
    "destination": "build",
    "plugins": {
        "metalsmith-collections": {
            "blog": {
                "pattern": "*/posts/*",
                "oderBy": "date",
                "revers": true
            },
            "pages": {
                "pattern": "*/pages/*"
            }
        },
        "metalsmith-markdown": true,
        "metalsmith-autoTemplate": {
            "pattern": "posts/",
            "templateName": "post.hbt"
        },
        "metalsmith-permalinks": ":collection/:title",
        "metalsmith-templates": "handlebars"
    }
}
```