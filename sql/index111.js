/**
 * Created by 11 on 2017/4/23.
 */
/*
 数据库基本操作步骤
 */
const mysql = require('mysql');
// 创建数据库连接
let connection = mysql.createConnection({
    host: 'localhost', //数据库所在的服务器域名或者IP
    user: 'root', //用户名
    password: '', //密码
    database: 'book' //数据库名称
});
// 执行连接动作
connection.connect();
// 执行数据库操作
let sql = 'select * from book';
connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
console.log('The solution is: ', rows[0].username);
});
// 关闭数据库
connection.end();

