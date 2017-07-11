'use strict';

module.exports = function() {
  $.gulp.task('sass-prod', function() {
    return $.gulp.src('./source/style/app.scss')

      .pipe($.gp.sass({outputStyle: 'compressed'})).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))

      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
