"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./../base/base");
class File extends base_1.Base {
    constructor(opts, data) {
        super(opts, data);
    }
    //创建JSON文件
    createJSONFile() {
        return new Promise((resolve, reject) => {
            resolve('1');
        });
    }
    // 创建URL文件
    createUrlFile() {
        return new Promise((resolve, reject) => {
        });
    }
}
exports.File = File;
//# sourceMappingURL=file.js.map