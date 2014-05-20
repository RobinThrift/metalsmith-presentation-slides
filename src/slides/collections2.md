---
title: Collections
num: 110
---


`templates/home.hbt`
```handlebars
<!-- ... -->
<div class="main-wrapper">
    {{#each collections.blog}}
        <article class="post">
            <h3>{{title}}</h3>
            <p>{{{contents}}}</p>
        </article>
    {{/each}}
</div>
<!-- ... -->
```
