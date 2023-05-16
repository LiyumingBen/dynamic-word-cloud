/*
 * @Author: LYM
 * @Date: 2023-02-04 14:49:36
 * @LastEditors: LYM
 * @LastEditTime: 2023-02-04 14:50:03
 * @Description: Please set Description
 */
declare module '*.vue' {
  import type { defineComponent, App } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }

  export default component
}

declare interface Window {
  __POWERED_BY_QIANKUN__: any
  fullScreen: any
  isFullscreen: any
  _AMapSecurityConfig: any
}

declare interface Document {
  webkitIsFullScreen: any
  msFullscreenEnabled: any
}