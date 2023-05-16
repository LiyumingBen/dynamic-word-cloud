/*
 * @Author: LYM
 * @Date: 2023-05-15 17:16:17
 * @LastEditors: LYM
 * @LastEditTime: 2023-05-16 09:21:42
 * @Description: 注册组件
 */
import { App } from "vue";
import DynamicWordCloudVue3 from "./index.vue";

// 定义 install 方法， App 作为参数
DynamicWordCloudVue3.install = (app: App): void => {
  app.component(DynamicWordCloudVue3.name as string, DynamicWordCloudVue3);
};

export default DynamicWordCloudVue3;
