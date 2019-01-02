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
const swagger_1 = require("./model/swagger");
const file_1 = require("./file/file");
class Core {
    constructor(opts) {
        // let config = Config;
        this.options = Object.assign({
            type: 'swagger',
            hostname: '',
            host: '',
            port: 80,
            path: '/v2/api-docs',
            method: 'GET',
            projectName: 'swagger',
            mockPort: 3000,
            customProtocol: 'http',
            jsPath: '/' //指定生成的URL文件创建路径
        }, opts);
    }
    init() {
        //不同类型跳转到不同数据层
        switch (this.options.type) {
            case 'swagger':
                let swagger = new swagger_1.Swagger(this.options);
                this.dataPromise = swagger.getData();
                break;
        }
        this.createFile();
    }
    //创建文件操作
    createFile() {
        return __awaiter(this, void 0, void 0, function* () {
            //执行文件层 
            yield this.dataPromise.then((data) => {
                this.data = data;
                console.log(this.data);
            });
            let file = new file_1.File(this.options, this.data);
            file.createJSONFile().then((a) => {
                // console.log(a);
            });
        });
    }
}
exports.Core = Core;
