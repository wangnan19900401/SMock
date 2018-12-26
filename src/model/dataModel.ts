interface Config {
    type: String; //接口类型
    hostname: String; //接口文档域名
    host: String; //接口文档IP
    port: Number; //Swagger文档端口号
    path: String; //Swagger Api
    method: String; //Swagger接口类型
    projectName: String; //创建mock数据文件夹名字
    mockPort: Number; //启动的本地服务的端口号
    customProtocol: String; //Swagger的协议类型
    jsPath: String; // 
}
interface Data {
    
}
export { Config, Data };