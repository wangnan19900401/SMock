export function dealConfig(c: any) {
    if (c.domain) {
        c.headers = {
            host: c.domain
        };
    }
    if (c.customProtocol == 'https') {
        c.port = 443;
    }
    //mock文件夹名
    // c.mockDirName = `${c.projectName?c.projectName:defaultConfig.projectName}mock`;
    return c;// Object.assign(defaultConfig, c);
}