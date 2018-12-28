"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./../base/base");
class File extends base_1.Base {
    constructor(opts, data) {
        super(opts, data);
    }
    //创建JSON文件
    createJSONFile() {
        return __awaiter(this, void 0, void 0, function* () {
            return '1';
        });
    }
    // 创建URL文件
    createUrlFile() {
        return __awaiter(this, void 0, void 0, function* () {
            return '1';
        });
    }
}
exports.File = File;
//# sourceMappingURL=file.js.map