var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
  replaceString: /\bgulp[\-.]/
});

var lessPluginCleanCSS = require('less-plugin-clean-css');
var lessPluginAutoPrefix = require('less-plugin-autoprefix');
var cleancss = new lessPluginCleanCSS({
  advanced: true
});
var autoprefix = new lessPluginAutoPrefix({
  browsers: ["last 2 versions"]
});

var webpackConfig = require('./webpack.config.js');

gulp.task('bower-files', function() {
  console.log(plugins.mainBowerFiles({
    debugging: true
  }));
});

gulp.task('js:build', function() {
  var jsFiles = plugins.mainBowerFiles();
  jsFiles.push("./lib/linq.min.js");

  gulp.src(jsFiles)
    .pipe(plugins.filter('**/*.js'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('vendor.js'))
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write('/'))
    .pipe(gulp.dest('app/js/'));
});

gulp.task('css:build', function() {
  gulp.src(plugins.mainBowerFiles())
    .pipe(plugins.filter('**/*.css'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('vendor.css'))
    .pipe(plugins.cssnano({
      zindex: false
    }))
    .pipe(plugins.sourcemaps.write('/'))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('js', function() {
  gulp.src('./app/js/app.js')
    //  .pipe(plugins.changed('./app/js/'))
    .pipe(plugins.wait(500))
    .pipe(plugins.livereload());
});

gulp.task('less', function() {
  gulp.src('assets/less/*.less')
    .pipe(plugins.less({
      plugins: [autoprefix, cleancss]
    }))
    .on("error", console.error.bind(console))
    .pipe(plugins.cssnano({
      zindex: false,
      autoprefixer: false,
      reduceTransforms: false,
      svgo: false,
      safe: true
    }))
    .pipe(gulp.dest('app/css/'))
    .pipe(plugins.livereload());
});

gulp.task('html', function() {
  gulp.src('./app/index.html')
    .pipe(plugins.livereload());
});

gulp.task('open:browser', function() {
  var uri = "http://";
  if (webpackConfig && webpackConfig.devServer) {
    uri += webpackConfig.devServer.host ? webpackConfig.devServer.host : 'localhost';
    uri += webpackConfig.devServer.port ? ":" + webpackConfig.devServer.port : "";
    gulp.src(__filename).pipe(plugins.open({
      uri: uri
    }));
  }
});

gulp.task('listen:livereload', function() {
  plugins.livereload.listen();
});

gulp.task('spy', function() {
  gulp.watch('./assets/less/**/*.less', ['less']);
  gulp.watch('./modules/components/**/*.less', ['less']);
  gulp.watch('./app/index.html', ['html']);
  gulp.watch('./app/js/*.js', ['js']);
});

gulp.task('build', ['js:build', "css:build"]);
gulp.task('watch', ['listen:livereload', 'spy']);
gulp.task('serve', ['watch', 'open:browser']);
gulp.task('default', ['serve']);
