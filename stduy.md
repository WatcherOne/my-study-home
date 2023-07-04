在以前，在不同的 JavaScript 环境中获取全局对象需要不同的语句
1. web：使用window、self、frames来获取全局对象
2. Web Workers：只有self可以
3. NodeJS：必须global可以

- global对象可以在全局作用域通过 this 访问到！
【只有ES5的非严格模式下可以, 而在严格模式下得到的是 undefined】

globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象（也就是全局对象自身）
它可以确保在有无窗口的各种环境下正常工作

[
    在很多引擎中, globalThis 被认为是真实的全局对象的引用
    但是在浏览器中，由于 iframe 以及跨窗口安全性的考虑，它实际引用的是真实全局对象（不可以被直接访问）的 Proxy 代理
    在通常的应用中，很少会涉及到代理与对象本身的区别，但是也需要加以注意
]

// Todo Web Workers

标准内置对象（全局对象：不是指global对象, 而是处于全局作用域里的多个对象，全局作用域的一个变量）

1. undefined：表示原始值 undefined, 是原始数据类型（7种）
    A. [ 用 typeof 检查变量是否为 undefined：它不会在一个变量没有被声明的时候抛出一个错误 ]
    B. [ 技术方面看来这样的使用方法应该被避免, JavaScript 是一个静态作用域语言 ]
       [ 一个变量是否被声明可以通过看它是否在一个封闭的上下文中被声明 ]
       [ 使用 in 操作符, if (undefined in window) { ... } ]
    C. [ void 运算符对给定的表达式进行求值，然后返回 undefined ]
       [ 这个运算符允许在表达式执行完成时，产生（某些地方）期望获得的 undefined 值 ]
       [ void 运算符通常只用于获取 undefined 的原始值, 一般使用 void(0) / void 0 ; 来代替全局变量 undefined ]
       [ void 优先级：void 2 === 3 // (void 2) === 3 ]
       [ 在所有的一元运算符中，void 提供了最好的语义，因为它明确表示函数调用的返回值应该被丢弃 ]
       [ 当点击一个以 javascript: 开头的 URI 时, 它会执行 URI 中的代码, 然后用返回的值替换页面内容, 除非返回的值是 undefined ]
       [ javascript:void(document.body.style.backgroundColor='green'); // 会使页面背景变成绿色 ]
       [ 利用 javascript: 伪协议来执行 JavaScript 代码是不推荐的，推荐的做法是为链接元素绑定事件 ]
    *  [ 伪协议: 不同于因特网上所真实存在的协议，为关联应用程序而使用的，如：tencen:// data: javascript: ]

2. NaN: 初始值不是数字, 与 Number.NaN 的值相同, 却是 number 原始数据类型
    A. [ NaN 不等于任何其他值, 包括 NaN 本身; 故 可以用 x !== x 来测试是不是为 NaN ]
    B. [ NaN 也是 JS 中的假值之一。 假值：falsy / falsey : 是在 Boolean 上下文中认定为 false 的值 ]
    C. [ 判断 NaN ]
       [ isNaN(x): 如果当前值为NaN，或将其强制转换为数字后为NaN，则返回true ]
       [ Number.isNaN(x): 当且仅当当前值为NaN时，才返回true ]
       [ x !== x: 同上面 ]
    D. [ 一些数组方法能找到 NaN，一些不可以 ]
       [ const arr = [2, 4, NaN, 12] ]
       [ arr.indexOf(NaN) // -1 ]
       [ arr.includes(NaN) // true ]
    E. [ NaN的静默转化: 指数为0的求幂  NaN ** 0 === 1, 立即返回1而不测试基数的值 ]

