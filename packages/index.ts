/*
 * @Author: LYM
 * @Date: 2023-02-04 14:31:17
 * @LastEditors: LYM
 * @LastEditTime: 2023-05-16 09:22:53
 * @Description: 组件导出
 */

import { App } from "vue";
import DynamicWordCloudVue3 from "./dynamic-word-cloud";

// 所有组件列表
const components = [DynamicWordCloudVue3] as any

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component: { name: any }) =>
    app.component(component.name, component)
  );
};

export { DynamicWordCloudVue3 };

export default {
  install,
};
