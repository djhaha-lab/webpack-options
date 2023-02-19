# vue

### 写组件前的考虑

组件是否要缓存，是否要异步加载，是否有建议使用指令或组合式函数的业务。

爷孙组件使用provide，inject，父子使用props，emit，兄弟或近邻使用vuex

特殊组件用：插槽，透传，teleport

在v-if为true时请求异步组件

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-18-16-10-39-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-18-53-32-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-14-19-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-19-26-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-32-01-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-35-11-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-37-53-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-40-21-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-40-53-image.png)

注意：插槽名也就是 v-slot:是写在要插入的模板上的，作用域插槽v-slot="{}"是写在该组件上的

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-41-57-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-52-57-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-54-59-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-57-36-image.png)![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-15-58-31-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-09-58-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-18-43-34-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-12-16-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-18-04-11-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-15-30-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-16-02-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-17-24-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-18-33-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-19-18-image.png) 

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-20-58-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-21-50-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-26-02-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-30-30-image.png)

### 重用代码的方式

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-42-01-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-44-12-image.png)

指令钩子和组件生命周期差不多，参数不同

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-48-20-image.png) 

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-51-47-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-16-53-48-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-16-12-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-20-15-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-24-56-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-25-29-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-28-48-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-30-44-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-31-37-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-27-23-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-32-33-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-38-05-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-39-08-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-41-13-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-46-58-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-48-02-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-48-51-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-54-52-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-17-59-57-image.png)

![](C:\Users\Administrator\AppData\Roaming\marktext\images\2023-02-16-18-00-42-image.png)

# vuex

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

这个状态自管理应用包含以下几个部分：

- **状态**，驱动应用的数据源；
- **视图**，以声明方式将**状态**映射到视图；
- **操作**，响应在**视图**上的用户输入导致的状态变化。

同步时直接commit，异步时先dispatch

项目结构：

```
store
    index.js
    mutations.js
    actions.js
    modules
 
```

```
import {createStore} from 'vuex'

const store =createStore({

state(){
    return{}
}

})
export default store;
```

```
import {useStore} from 'vuex'


const store = useStore()
store.state.property
```

## 双向绑定的计算属性 [#](https://vuex.vuejs.org/zh/guide/forms.html#双向绑定的计算属性)

必须承认，这样做比简单地使用“`v-model` + 局部状态”要啰嗦得多，并且也损失了一些 `v-model` 中很有用的特性。另一个方法是使用带有 setter 的双向绑定计算属性：

```
<input v-model="message">
```

```
// ...
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```

# vueRouter

主要功能是在跳转路由前后拦截，触发钩子函数或给下个页面传参

```javascript
import {createRouter,createWebHistory} from 'vue-router'
const router = createRouter({
    routes:[{path:'',component:,name,meta,redirect,children,beforeEnter}]
    history:createWebHistory()
})
router.beforeEnter()
export default router
```

```html
<router-link to="/name"></router-link>
<router-link to="{path:'/name',name:'name',query:{}}"></router-link>
<router-view></router-view>
```

动态路由匹配

你可以在同一个路由中设置有多个 *路径参数*，它们会映射到 `$route.params` 上的相应字段。例如：

| 匹配模式                           | 匹配路径                     | $route.params                            |
| ------------------------------ | ------------------------ | ---------------------------------------- |
| /users/:username               | /users/eduardo           | `{ username: 'eduardo' }`                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | `{ username: 'eduardo', postId: '123' }` |

编程式导航

```
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```

###### 命名视图 [#](https://router.vuejs.org/zh/guide/essentials/named-views.html#命名视图)

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 `sidebar` (侧导航) 和 `main` (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 `router-view` 没有设置名字，那么默认为 `default`。

```
<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>
```

一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 `components` 配置 (带上 **s**)：

```
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar,
        // 它们与 `<router-view>` 上的 `name` 属性匹配
        RightSidebar,
      },
    },
  ],
})
```

路由组件传参

当 `props` 是一个对象时，它将原样设置为组件 props。当 props 是静态的时候很有用。

```
const routes = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false }
  }
]
```

不一定用得到的特点：

可以设置滚动行为,具体请看官方文档

Vue Router 将 RouterLink 的内部行为作为一个组合式 API 函数公开。它提供了与 [`v-slot` API](https://router.vuejs.org/zh/api/#router-link-s-v-slot) 相同的访问属性

```
import { RouterLink, useLink } from 'vue-router'
const { route, href, isActive, isExactActive, navigate } = useLink(RouterLink.props)
```
