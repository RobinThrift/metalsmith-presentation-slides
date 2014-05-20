var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates'),
    sass        = require('metalsmith-sass'),
    collections = require('metalsmith-collections'),
    replace     = require('metalsmith-replace'),
    branch      = require('metalsmith-branch'),
    Handlebars  = require('handlebars'),
    hljs        = require('highlight.js');


var filter = function() {
    return function(files, metalsmith, done) {
        for (var file in files) {
            if (file == '.htaccess') {
                continue;
            }
            
            if (/^([\._])|(\/([\._]).*?)/g.test(file)) {
                delete files[file];
            }
        }
        done();
    }
};

var rmSlides = function() {
    return function(files, metalsmith, done) {
        for (var file in files) {
            if (/(slides)/g.test(file)) {
                delete files[file];
            }
        }
        done();
    }
}

Metalsmith(__dirname)
    .use(filter())
    .use(markdown({
        gfm: true,
        tables: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code, lang, callback) {
            return hljs.highlightAuto(code).value
        }
    }))
    .use(branch()
        .pattern('slides/*')
            .use(replace({
                contents: function(contents) {
                    return contents.toString().replace(/(?:<p>)?\[fragment\](?:<\/p>)?\s*([\s\S]*?)\s*(?:<p>)?\[\/fragment\](?:<\/p>)?/g, '<div class="fragment">$1</div>');
                }
            }))
    )
    .use(collections({
        slides: {
            pattern: 'slides/*',
            sortBy: 'num'
        }
    }))
    .use(rmSlides())
    .use(templates({
        engine: 'handlebars'
    }))
    .use(sass({
        outputStyle: "expanded"
    }))
    .destination('./build')
    .build();