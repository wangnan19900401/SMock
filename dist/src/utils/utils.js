"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dealConfig(c) {
    if (c.domain) {
        c.headers = {
            host: c.domain
        };
    }
    if (c.customProtocol == 'https') {
        c.port = 443;
    }
    //mock文件夹名
    // c.mockDirName = `${c.projectName?c.projectName:defaultConfig.projectName}mock`;
    return c; // Object.assign(defaultConfig, c);
}
exports.dealConfig = dealConfig;
//# sourceMappingURL=utils.js.map