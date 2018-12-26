"use strict";
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
                this.data = swagger.getData();
                break;
        }
        //执行文件层
        let file = new file_1.File(this.options, this.data);
        file.createJSONFile().then((a) => {
            console.log(a);
        });
    }
}
exports.Core = Core;
//# sourceMappingURL=main.js.map