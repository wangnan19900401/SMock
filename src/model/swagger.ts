/**
 * 
 * 使用Swagger时，处理数据的文件
 */

import { Config } from './dataModel';
class Swagger {
    constructor(opts: Config) {

    }
    getData(): any  {
        return {
            "a": 1
        }
    }

}
export { Swagger };