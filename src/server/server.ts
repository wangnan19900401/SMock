import {Data, Config} from './../model/dataModel';
class Server {
    options: Config;
    data: Data;
    constructor(opts) {

    }
    //启动服务
    startServer() {
        return new Promise((resolve, reject) => {

        })
    }
    // 注入接口
    addAPI() {
        return new Promise((resolve, reject) => {

        })
    }
}

export { Server };