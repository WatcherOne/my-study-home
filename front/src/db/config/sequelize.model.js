/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-22 10:08:46
 * Description: 自定生成 表 对应 sequelize 的模型
*************************************************************/
import { DATABASE } from '../config.js'
// NodeJS通过 child_process 开启子进程执行指定程序（主要包括4个异步进程函数：spawn，exec，execFile，fork）
// exec：衍生一个 shell 并在该shell中运行命令，当完成时将stdout和stderr传递给回调函数
import child_process from 'child_process'

// 导出的数据库表名, 可命令配置, 否则全部
const modelName = process.argv[2] || ''
const { exec } = child_process

const options = {
    host: DATABASE.host,
    port: DATABASE.port,
    database: DATABASE.database,
    user: DATABASE.username,
    pass: DATABASE.password,
    output: 'src/admin/entity',  // 当对于在 package里面的位置 或 运行命令时文件的位置
    dialect: 'mysql',
    tables: modelName,
    camel: true,
    caseProp: 'c',     // 字段名会自动转驼峰  c = camelCase l = lower_case o = original(default)
    caseFile: 'p',     // 生成文件名采用帕斯卡命名法（首字母大写）
    noInitModels: true,
    lang: 'esm',       // ES6 esm模块
    useDefine: true,
    indentation: 4,    // 换行空格数
    typescript: false
}

let connectShell = 'sequelize-auto'
for (const i in options) {
    const value = options[i]
    if (value) {
        if (value === true) {
            connectShell += ` --${i}`
        } else {
            connectShell += ` --${i} ${value}`
        }
    }
}

exec(connectShell, (err, stdout, stderr) => {
    console.log(`stderr: ${stderr}`)
    console.log(`stdout: ${stdout}`)
    if (err) {
        console.log(`exec error: ${err}`)
    }
})
