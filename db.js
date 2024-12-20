const mysql=require('mysql2');
const db=mysql.createConnection({
    host:'bkgsqukq4ogau5fmsdpv-mysql.services.clever-cloud.com',
    user:'ud9rjdhqqg0v08sj',
    password:'hirgbqcMERFJzQItXSmK',
    database:'bkgsqukq4ogau5fmsdpv',
    port:3306
})
module.exports=db;



