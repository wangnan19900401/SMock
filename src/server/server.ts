import { Base } from './../base/base';
import { Data, Config, UrlData } from './../model/dataModel';
// import { axios } from 'axios';
let axios = require('axios');
class Server extends Base{
    constructor(opts: Config) {
        super(opts, null);
    }
    //启动服务
    startServer(): Promise<Object>  {
        return new Promise((resolve, reject) => {

        })
    }
    // 注入接口
    addAPI(): Promise<Object>  {
        return new Promise((resolve, reject) => {

        })
    }
    //获取数据
    async fetchData(opts:UrlData): Promise<Object> {
        let result;
        await axios({
            url: opts.url
        })
        .then((data: any) => {
            result = data.data;
        })  
        return result;
    }
}

export { Server };