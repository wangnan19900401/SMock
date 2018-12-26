"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Core {
    constructor(opts) {
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
        console.log(this.options);
    }
    init() {
        console.log(this.options);
        // switch(this.options.type) {
        //     case 'swagger':
        //         let swagger = new Swagger(this.options);
        //         swagger.init();
        //     break;
        // }
    }
}
exports.Core = Core;
//# sourceMappingURL=main.js.map