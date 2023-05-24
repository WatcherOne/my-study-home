import { DataTypes } from 'sequelize'
import { sequelize } from '../../mysql/index.js'
import Book from './Book.js'
import BookList from './BookGroup.js'

export default sequelize.define('book_group_book', {
    listId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "书单Id",
        field: 'list_id',
        references: {
            model: BookList,
            key: 'id'
        }
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "书籍Id",
        field: 'book_id',
        references: {
            model: Book,
            key: 'id'
        }
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "书籍顺序",
        defaultValue: 1
    },
    createBy: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "创建人",
        field: 'create_by'
    },
    createTime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "创建时间",
        field: 'create_time'
    },
    updateBy: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "更新人",
        field: 'update_by'
    },
    updateTime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "更新时间",
        field: 'update_time'
    }
})
