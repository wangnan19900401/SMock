/**
 * 
 * 使用Swagger时，处理数据的文件
 */

import { Config, UrlData } from './dataModel';
import { Server } from './../server/server'
import { dealConfig } from './../utils/utils';
class Swagger {
    config: Config;
    constructor(opts: Config) {
        this.config = dealConfig(opts);
    }
    async getData(): Promise<Object>  {
        let self = this;
        let d;
        await self.getDataFromServer()
            .then((data: any) => {
                d = self.convertData(data)
            })
        return d;
    }
    async getDataFromServer(): Promise<Object> {
        let server = new Server(this.config);
        let result;
        await server.fetchData(
            {
                url: `${this.config.customProtocol}://${this.config.host}${this.config.path}`
            }            
        )
        .then((data) => {
            result = data;
        })
        return result;
    }
    convertData(data: any): any {
        return data;
    }
}
export { Swagger };