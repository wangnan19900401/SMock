const { task, watch, series, src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const ts = require('gulp-typescript');
//TS解析
function compilerTypeScript(cb) {
    return src('src/**/*.ts')
        .pipe(ts({
            "module": "CommonJS",
            "esModuleInterop": true,
            "target": "es6",
            "noImplicitAny": true,
            "moduleResolution": "node",
            "sourceMap": false
        })
        )
        .pipe(dest('./dist'));
}
function jsCompress(cb) {
    return src('src/**/*.js')
    .pipe(uglify())
    .pipe(dest('dist'));
}

if(process.env.NODE_ENV === 'development') {
    task('default', series(compilerTypeScript));
    watch(['src/**/*.ts'], series(compilerTypeScript))
} else {
    task('default', series(compilerTypeScript, jsCompress));
}
