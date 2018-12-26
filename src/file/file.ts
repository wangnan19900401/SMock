import { Base } from './../base/base';
import { Config, Data } from './../model/dataModel';
class File extends Base {
    constructor(opts: Config, data: Data) {
        super(opts, data);
    }
    //创建JSON文件
    createJSONFile() {
        return new Promise((resolve, reject) => {
            resolve('1')
        })
    }
    // 创建URL文件
    createUrlFile() {
        return new Promise((resolve, reject) => {

        })
    }
}

export { File };