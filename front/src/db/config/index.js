/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 13:59:53
 * Description: 连接数据库
*************************************************************/
// sequelize是基于NodeJS的ORM框架，它适用于不同的数据库
import Sequelize from 'sequelize'
import { DATABASE } from './config.js'

export const sequelize = new Sequelize(DATABASE.database, DATABASE.username, DATABASE.password, {
    host: DATABASE.host,
    dialect: 'mysql',
    // 输入日志, 默认：console.log
    // logging: (...msg) => console.log(msg),
    // logging: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000  // 如果一个线程 100s 没有使用的话就释放线程
    },
    // 全局定义配置
    define: {
        // 默认情况下, Sequalize自动向每个模块添加createdAt和updatedAt字段
        timestamps: true,
        // 自定义时间戳字段
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        charset: 'utf8mb4',
        // 将驼峰命名转换为下划线
        underscored: true,
        // 停止执行自动复数, 即表名===模型名，而无需任何改变
        freezeTableName: true
    }
})

// 测试连接数据库
// try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
// } catch (error) {
//     console.error('Unable to connect to the database:', error)
// }
