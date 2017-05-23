/*
    静态服务器封装
*/
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
let staticDir = '/abc';
let rootDir = 'C:\\Users\\www\\Desktop\\';

let info404 = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404</title>
</head>
<body>
    <div>页面被狗狗叼走了</div>
</body>
</html>
`;

exports.initStaticServer = (req, res, rootDir, staticDir) => {
    // 根据URL地址读取对应文件的内容然后返回客户端
    if (req.url.startsWith(staticDir)) {
        let filename = path.basename(req.url);
        fs.readFile(path.join(rootDir, staticDir, filename), (err, data) => {
            if (err) {
                res.end(info404);
                return;
            }
            // 获取URL中文件的扩展名
            let ext = path.extname(req.url);
            // 设置响应类型的默认值
            let cType = 'text/html';
            // 如果请求的文件格式存在就覆盖默认值，不存在就是使用默认值
            if (mime[ext]) {
                cType = mime[ext];
            }
            //文本文件需要指定编码，图片不需要
            if (mime[ext].startsWith('text')) {
                cType += '; charset=utf8'
            }
            // 设置响应头信息
            res.writeHead(200, {
                    'Content-Type': cType
                });
            // 完成响应并返回内容
            res.end(data);
        });
    }

}
