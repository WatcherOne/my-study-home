// Todo List Page
// 做一个 Todo List 管理
// 功能1： 可以新增代办事项（代办时间，代办内容）
// 功能2： 代办事项有完成，未开始，开始，进行中等状态
// 功能3： 代办事项也有永久性的与时效性类型的代办
// 永久性指：一直有效地代办，不一定什么时候就完成了或一直未完成（是一个长期的目标）
// 时效性值：在一定时间内必须要完成，否则就视为没有完成

export default function TodoList ({ todoList = [] }) {
    return (
        <div>
            <div>Todo List</div>
            <div>1. 去看.....</div>
            <div>2. 打扫.....</div>
        </div>
    )
}
