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
const base_1 = require("./../base/base");
// import { axios } from 'axios';
let axios = require('axios');
class Server extends base_1.Base {
    constructor(opts) {
        super(opts, null);
    }
    //启动服务
    startServer() {
        return new Promise((resolve, reject) => {
        });
    }
    // 注入接口
    addAPI() {
        return new Promise((resolve, reject) => {
        });
    }
    //获取数据
    fetchData(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            yield axios({
                url: opts.url
            })
                .then((data) => {
                result = data.data;
            });
            return result;
        });
    }
}
exports.Server = Server;
