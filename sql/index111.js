/**
 * Created by 11 on 2017/4/23.
 */
/*
 ���ݿ������������
 */
const mysql = require('mysql');
// �������ݿ�����
let connection = mysql.createConnection({
    host: 'localhost', //���ݿ����ڵķ�������������IP
    user: 'root', //�û���
    password: '', //����
    database: 'book' //���ݿ�����
});
// ִ�����Ӷ���
connection.connect();
// ִ�����ݿ����
let sql = 'select * from book';
connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
console.log('The solution is: ', rows[0].username);
});
// �ر����ݿ�
connection.end();

