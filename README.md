# vue3-web-share

## 快速开始

#### 安装

```bash
npm i vue3-web-share -S
```

#### 引入

全局引入，在 main.js 中

```js
import DynamicWordCloudVue3 from "dynamic-word-cloud-vue3";
import "dynamic-word-cloud/lib/index.css";
```

或按组件单个引用，在`.vue`文件中

```vue
<script>
import { DynamicWordCloudVue3 } from "dynamic-word-cloud-vue3";
import "dynamic-word-cloud/lib/index.css";

export default {
  name: "viewName",
  components: {
    DynamicWordCloudVue3,
  },
};
</script>
```

#### 使用

```vue
<template lang="ts">
 <div class="wrap">
  <dynamic-word-cloud-vue3 :data="state.data"></dynamic-word-cloud-vue3>
 </div>
</template>
```

## Props 参数列表

| prop      | 作用 | 默认值 | 类型   |
| --------- | ---- | ------ | ------ |
| data      | 数据 | []     | Array  |
| color     | 颜色 | []     | Array  |
| speed     | 速度 | 400    | Number |
| direction | 方向 | '-1'   | String |
