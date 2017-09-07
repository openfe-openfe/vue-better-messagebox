## What is it
为vue提供的仿原生ios message弹窗钻进

## 安装
```js
npm install vue-better-messagebox --save
```

## 使用
vue main.js 入口文件
```javascript
import {Alert, Confirm, Toast} from 'vue-better-messagebox'
// 样式文件
import 'vue-better-messagebox/style.css'

// 使用该插件
Vue.use(Alert, options)
Vue.use(Confirm, options)
Vue.use(Toast, duration)

```

## 使用
```javascript
    this.$alert('title', {
        title: '提示',
        btn: {
            text: '确定'
        }
    })
    .then(()=>{
        this.$toast('你点击了确定');
    })
// 更简单的弹窗
    this.$alert('title', {
        title: '提示',
        btn: {
            text: '确定'
        }
    })

// 其他弹窗和方式和上面一样
```
## 效果图

![image](https://github.com/songhaoreact/vue-better-messagebox/blob/master/demo.gif)






