import { Base } from './../base/base';
import { Config, Data } from './../model/dataModel';
class File extends Base {
    constructor(opts: Config, data: Data) {
        super(opts, data);
    }
    //创建JSON文件
    async createJSONFile() {
        return '1';
    }
    // 创建URL文件
    async createUrlFile() {
        return '1'
    }
}

export { File };