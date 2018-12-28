import { Swagger} from './model/swagger';
import { Config, Data } from './model/dataModel';
import { File } from './file/file';
class Core { 
    // 缓存参数
    options: Config;
    // 缓存数据
    data: Object;
    //数据Promise
    dataPromise: Promise<Object>;
    constructor(opts: Object) {
        // let config = Config;
        this.options = Object.assign({
            type: 'swagger',//文档类型
            hostname: '', //接口文档域名
            host: '', //接口文档ip
            port: 80, //接口文档端口
            path: '/v2/api-docs',
            method: 'GET',
            projectName: 'swagger', //项目名称
            mockPort: 3000, //模块数据服务端口
            customProtocol: 'http',
            jsPath: '/' //指定生成的URL文件创建路径
        }, opts);
    }
    init(): void {
        //不同类型跳转到不同数据层
        switch(this.options.type) {
            case 'swagger':
                let swagger = new Swagger(this.options);
                this.dataPromise = swagger.getData();
            break;
        }
        this.createFile();
        
    }
    //创建文件操作
    async createFile() {
        //执行文件层
        await this.dataPromise.then((data: any) => {
            this.data = data;
            console.log(this.data);
        })
        let file = new File(this.options, this.data);
        file.createJSONFile().then((a) => {
            // console.log(a);
        })
    }

}
export { Core };