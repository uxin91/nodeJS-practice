/**
 * Created by 11 on 2017/4/23.
 */
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
let sql = 'insert into book set ?';
let data = {
    username:'lili',
    password:'123'
}
connection.query(sql, data,(err, rows, fields) => {
    if (err) throw err;
    console.log('The solution is: ', rows.affectedRows);
});
// �ر����ݿ�
connection.end();


