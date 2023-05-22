### Sequelize

#### Getting Started
[中文文档](https://www.sequelize.cn/core-concepts/getting-started)

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
        // Sequelize.INTEGER(10)
        // Sequelize.STRING - 指定字符串类型
        // Sequelize.STRING(255) - 指定字符串类型长度
        // Sequelize.ENUM(['男', '女', '默认']) - 枚举类型（数组格式）
        // Sequelize.VIRTUAL  - 虚拟字段，不存在于数据库的字段
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
    createdAt: 'create_time',
    updatedAt: 'update_time',
    charset: 'uft8mb4',
    // 表名称
    tableName: 'user',
    // 或配置停止执行自动复数, 即表名===模型名，而无需任何改变
    // 上下两种都可, 或者全局配置
    freezeTableName: true
})
```

> attributes 字段信息
```
type:           字段类型
allowNull:      是否允许为空,默认为true
defaultValue:   默认值, 默认为null
unique:         值唯一, 默认为false
primaryKey:     是否为主键, 默认为false
field:          数据库中字段的实际名称
autoIncrement:  是否自增, 默认false
get:            字段的getter函数
set:            字段的setter函数
validate:       对象, 对当前字段值发生变化时进行验证
```

> 定义表的索引（设置在模型额外配置处）
>   增加索引可以让数据库查询数据时变得更快
```
{
    indexes: [
        {
            name: '',               // 索引名称, 默认模型名称+字段
            fields: ['username'],   // 索引字段
            unique: false           // 唯一索引, 默认false（可以防止对应列的重复数据插入）
        }
    ]
}
```
> 索引优缺点
1. 查询中排序的字段创建索引将大大提高排序的速度（索引就是排序加快速查找）
2. 频繁作为查询条件的字段应该创建索引
3. 频繁更新的字段不适合创建索引，因为每次更新不单单是更新记录，还会更新索引，保存索引文件
4. where条件里用不到的字段，不创建索引
5. 前导模糊查询不能使用索引, 如name like '%静'


####  sequelize-auto
> 快速生成表结构的工具

```
npm install --save-dev sequelize-auto

sequelize-auto -h "数据库地址" -d "数据库名称" ... 
// 可以输入命令生成, 如果太麻烦可以封装JS文件用node执行
```

> 配置
```
-h, --host         [required] * 数据库地址
-d, --database     [required] * 数据库名称
-p, --port         # 数据库端口
-u, --user         # 数据库用户名
-x, --pass         # 数据库密码
-o, --outpue       # 输出文件路径
-e, --dialect      # 数据库类型, 'mysql'
-a, --additional   # 包含在model的配置参数中 define的模型定义的JSON文件路径
-t, --tables       # 要导出的表名, 多个表名逗号隔开, 空值就导出所有表模型
-T, --skip-tables  # 要跳过的表名, 多个表名逗号隔开
-C, --camel        # 使用驼峰命名模型和字段
-caseModel         # 表名会自动转驼峰
-caseProp          # 使用模型名的大小写 [c|l|o|p|u]
-caseFile          # 文件名的大小写
-noInitModels      # 禁止写入init-models文件
-l, -lang          # lang模型输出语言：es5|es6|esm|ts
-useDefine         # 使用'sequel.define'而不是'init'
-z, --typescript   # 将模型输出为 typescript 文件
```
