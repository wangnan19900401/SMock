"use strict";
/**
 *
 * 使用Swagger时，处理数据的文件
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./../server/server");
const utils_1 = require("./../utils/utils");
class Swagger {
    constructor(opts) {
        this.config = utils_1.dealConfig(opts);
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            let self = this;
            let d;
            yield self.getDataFromServer()
                .then((data) => {
                d = self.convertData(data);
            });
            return d;
        });
    }
    getDataFromServer() {
        return __awaiter(this, void 0, void 0, function* () {
            let server = new server_1.Server(this.config);
            let result;
            yield server.fetchData({
                url: `${this.config.customProtocol}://${this.config.host}${this.config.path}`
            })
                .then((data) => {
                result = data;
            });
            return result;
        });
    }
    convertData(data) {
        return data;
    }
}
exports.Swagger = Swagger;
