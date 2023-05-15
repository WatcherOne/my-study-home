### Sequelize

#### Getting Started

> 安装依赖
```
npm install sequelize
npm install mysql2   // 安装对应的数据库
```
> 配置连接数据库(有多种方式, 以配置方式为主)[https://sequelize.org/api/v6/class/src/sequelize.js~sequelize#instance-constructor-constructor]
```
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    // 数据库类型
    dialect: 'mysql',
    // define === Model.init
    define: {
        timestamps: true,
        charset: 'utf8mb4',
        freezeTableName: true
    },
    // 始终强制模型同步
    sync: {
        force: true
    }
})
```

#### 配置实体类参数说明[https://sequelize.org/api/v6/class/src/model.js~model#static-method-init] 

```
const User = sequelize('user', {
    id: {
        // 指定值类型
        // Sequelize.INTEGER
        // Sequelize.INTEGER.UNSIGNED - 无符号int型
        // Sequelize.STRING - 指定字符串类型
        // Sequelize.STRING(255) - 指定字符串类型长度
        type: Sequelize.INTEGER,
        // 对应表中键名称
        field: 'id',
        // 是否是主键
        primaryKey: true,
        // 自动递增
        autoIncrement: true,
        // 默认值
        defaultValue: any,
        // 是否唯一
        unique: true,
        // 是否允许为空
        allowNull: false
    }
}, {
    // 将 createdAt 和 updatedAt 时间戳添加到模型中
    timestamps: true,
    // 覆盖 createdAt 属性的名称
    createdAt: 'create_by',
    updatedAt: 'update_by',
    charset: 'uft8mb4',
    // 表名称
    tableName: 'user',
    // 或配置停止执行自动复数, 即表名===模型名，而无需任何改变
    // 上下两种都可, 或者全局配置
    freezeTableName: true
})
```


