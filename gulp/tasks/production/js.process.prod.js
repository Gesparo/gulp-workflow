'use strict';

module.exports = function() {
  $.gulp.task('js:process-prod', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.uglify({ mangle : false }))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
