// const gulp        = require('gulp');
// const browserSync = require('browser-sync');
// const sass        = require('gulp-sass')(require('sass'));
// const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer');
// const rename = require("gulp-rename");
// const imagemin = require('gulp-imagemin');
// const htmlmin = require('gulp-htmlmin');
//
// gulp.task('server', function() {
//
//     browserSync({
//         server: {
//             baseDir: "dist"
//         }
//     });
//
//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });
//
// gulp.task('styles', function() {
//     return gulp.src("src/**/*.+(scss|sass)")
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(rename({suffix: '.min', prefix: ''}))
//         .pipe(autoprefixer())
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(gulp.dest("dist/css"))
//         .pipe(browserSync.stream());
// });
//
// gulp.task('watch', function() {
//     gulp.watch("src/**/*.+(scss|sass|css)", gulp.parallel('styles'));
//     gulp.watch("src/*.html").on('change', gulp.parallel('html'));
// });
//
// gulp.task('html', function () {
//     return gulp.src("src/*.html")
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest("dist/"));
// });
//
// gulp.task('scripts', function () {
//     return gulp.src("src/js/**/*.js")
//         .pipe(gulp.dest("dist/js"));
// });
//
//
// gulp.task('icons', function () {
//     return gulp.src("src/assets/icons/**/*")
//         .pipe(gulp.dest("dist/assets/icons"));
// });
//
// gulp.task('mailer', function () {
//     return gulp.src("src/mailer/**/*")
//         .pipe(gulp.dest("dist/mailer"));
// });
//
// gulp.task('images', function () {
//     return gulp.src("src/assets/image/**/*")
//         .pipe(imagemin())
//         .pipe(gulp.dest("dist/assets/image"));
// });
//
// gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'icons', 'mailer', 'html', 'images'));


const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        // .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/assets/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/assets/image/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});


gulp.task('icons', function () {
    return gulp.src("src/assets/icons/**/*")
        .pipe(gulp.dest("dist/assets/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/assets/image/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/assets/image"))
        .pipe(browserSync.stream());
});

gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'icons', 'html', 'images', 'mailer'));