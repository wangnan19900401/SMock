// import { Core } from '../dist/main.js';
var Core = require('./../dist/main.js').Core;
console.log(Core);
var core = new Core({
    "host": "10.182.30.155",
    "domain": "m-svc.jd.com",
    "projectName": "m-svc.jd.com",
    "mockPort": 4000,
    "headers": {
        "host": "kudou-staff-m-fy.jd.com"
    }
});
core.init();
