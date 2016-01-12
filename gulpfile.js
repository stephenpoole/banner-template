// Gulp configuration

var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var sass        = require('gulp-sass');
var replace     = require('gulp-replace');
var stripDebug  = require('gulp-strip-debug');
var include     = require('gulp-include');
var rename      = require('gulp-rename');
var minifyCss   = require('gulp-cssnano');
var minifyHtml  = require('gulp-htmlmin');
var config      = require('./config.json');
var fs          = require("fs");
var del         = require('del');

gulp.task('generateHtml', ['pre'], function() {
    var js = fs.readFileSync("template/js/clickTags/adgear.js", "utf8");

        for (var k in config.text) {
            for (var j in config.clickTags) {
                for (var i in config.sizes) {
                    var clickTag = config.clickTags[j]
                    var size = config.sizes[i];
                    var language = k;
                    var folderName = size+'-'+clickTag;

                    gulp.src('assets/default/**/*')
                        .pipe(gulp.dest('build/'+folderName+'/'+language));

                    gulp.src('assets/'+language+'/**/*')
                        .pipe(gulp.dest('build/'+folderName+'/'+language));

                    //normal
                    var index = gulp.src('template/index.html')
                        .pipe(replace('@html-size@',size))
                        .pipe(replace('@js-clickTag@', clickTag))
                        .pipe(replace('@js-size@', size));

                    for (var i in config.text[k]) {
                        index.pipe(replace('@html-'+i+'@', config.text[k][i]));
                    }

                    index.pipe(include())
                        .pipe(rename({'suffix':'.fat'}))
                        .pipe(gulp.dest('build/'+folderName+'/'+language))


                    //minified
                    var index = gulp.src('template/index.html')
                        .pipe(replace('@html-size@',size))
                        .pipe(replace('@.js', '@.min.js'))
                        .pipe(replace('@js-clickTag@', clickTag))
                        .pipe(replace('.css*/', '.min.css*/'))
                        .pipe(replace('@js-size@', size));

                    for (var i in config.text[k]) {
                        index.pipe(replace('@html-'+i+'@', config.text[k][i]));
                    }

                    index.pipe(include())
                        .pipe(minifyHtml())
                        .pipe(gulp.dest('build/'+folderName+'/'+language))
                }
            }
        }
})

gulp.task('pre', ['clean'], function() {
    gulp.src('template/global.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/temp/css'))
        .pipe(minifyCss())
        .pipe(rename({'suffix':'.min'}))
        .pipe(gulp.dest('build/temp/css'));

    gulp.src('template/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/temp/css'))
        .pipe(minifyCss())
        .pipe(rename({'suffix':'.min'}))
        .pipe(gulp.dest('build/temp/css'))

    return gulp.src('template/js/**/*.js')
        .pipe(stripDebug())
        .pipe(gulp.dest('build/temp/js'))
        .pipe(uglify({mangle:false}))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('build/temp/js'));
});

gulp.task('default', ['generateHtml'], function() {});

gulp.task('clean', function() {
    return del(['build'])
});







