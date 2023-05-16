<!--
 * @Author: LYM
 * @Date: 2023-05-15 17:16:25
 * @LastEditors: LYM
 * @LastEditTime: 2023-05-16 16:14:20
 * @Description: 动态词云组件
-->

<template>
  <div id="wordCloud" class="wordCloud__tagBall">
    <span
      ref="target"
      class="wordCloud__tag"
      v-for="(item, index) in data"
      :key="index"
      :style="{
        color: color[index % color?.length],
        ...state.contentEle[index]?.style,
      }"
      @mouseenter="stop(item)"
      @mouseleave="start(index)"
      @click="wordClick(item)"
    >
      {{ item.name }}
    </span>
    <div
      class="tooltip"
      v-if="isShowTips && state.isShowTip"
      :style="tooltipStyle(x, y, isOutside)"
    >
      <span class="name"> {{ state.curItem.name }}</span>
      <span class="value" v-if="isShowVal"> ：{{ state.curItem.value }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  PropType,
  onMounted,
  computed,
} from "vue";
import { useMouseInElement } from "@vueuse/core";

export interface IWordCloudItem {
  name: string;
  value: string | number;
}

export default defineComponent({
  name: "DynamicWordCloudVue3",
  props: {
    data: {
      required: true,
      type: Array as PropType<IWordCloudItem[]>,
    },
    color: {
      required: false,
      type: Array as PropType<string[]>,
      default: () => [
        "#2D4DB6",
        "#04B67C",
        "#D1AF07",
        "#E27914",
        "#CB4A4D",
        "#B02690",
      ],
    },
    speed: {
      required: false,
      type: Number,
      default: 400,
    },
    direction: {
      required: false,
      type: String,
      default: "-1",
    },
    isShowVal: {
      required: false,
      type: Boolean,
      default: true,
    },
    isShowTips: {
      required: false,
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const target = ref(null);

    const state = reactive({
      width: 0,
      height: 0,
      contentEle: [] as any,
      animateID: null as any,
      curIndex: -1,
      curItem: {} as any,
      isShowTip: false, // 是否显示提示
    });

    state.contentEle =
      props.data &&
      props.data.map(() => ({
        x: 0,
        y: 0,
        z: 0,
        style: {},
      }));

    const init = () => {
      const RADIUSX = (state.width - 50) / 2;
      const RADIUSY = (state.height - 50) / 2;
      state.contentEle = [];
      if (props.data && props.data.length)
        for (let i = 0; i < props.data.length; i += 1) {
          const k = -1 + (2 * (i + 1) - 1) / props.data.length;
          const a = Math.acos(k);
          const b = a * Math.sqrt(props.data.length * Math.PI);
          const x = RADIUSX * Math.sin(a) * Math.cos(b);
          const y = RADIUSY * Math.sin(a) * Math.sin(b);
          const z = RADIUSX * Math.cos(a);
          const singleEle = {
            x,
            y,
            z,
            style: {},
          };
          state.contentEle.push(singleEle);
        }
      animate();
    };

    const animate = () => {
      rotateX();
      rotateY();
      move();
      state.animateID = window.requestAnimationFrame(animate);
    };

    const rotateX = () => {
      const angleX = ["-1", "1"].includes(props.direction)
        ? Math.PI / Infinity
        : Math.PI / ((Number(props.direction) / 2) * Number(props.speed));
      const cos = Math.cos(angleX);
      const sin = Math.sin(angleX);

      state.contentEle = state.contentEle.map((t: any) => {
        const y1 = t.y * cos - t.z * sin;
        const z1 = t.z * cos + t.y * sin;
        return {
          ...t,
          y: y1,
          z: z1,
        };
      });
    };

    const rotateY = () => {
      const angleY = ["-2", "2"].includes(props.direction)
        ? Math.PI / Infinity
        : Math.PI / (Number(props.direction) * Number(props.speed));
      const cos = Math.cos(angleY);
      const sin = Math.sin(angleY);
      state.contentEle = state.contentEle.map((t: any) => {
        const x1 = t.x * cos - t.z * sin;
        const z1 = t.z * cos + t.x * sin;
        return {
          ...t,
          x: x1,
          z: z1,
        };
      });
    };

    const move = () => {
      const CX = state.width / 2;
      const CY = state.height / 2;
      state.contentEle = state.contentEle.map((singleEle: any) => {
        const { x, y, z } = singleEle;
        const fallLength = 500;
        const RADIUS = (state.width - 50) / 2;
        const scale = fallLength / (fallLength - z);
        const alpha = (z + RADIUS) / (2 * RADIUS);
        const left = `${x + CX - 30}px`;
        const top = `${y + CY - 15}px`;
        const transform = `translate(${left}, ${top}) scale(${scale})`;
        const style = {
          ...singleEle.style,
          opacity: alpha + 0.5,
          zIndex: parseInt((scale * 100).toString(), 10),
          transform,
        };
        return {
          x,
          y,
          z,
          style,
        };
      });
    };

    // 鼠标移入暂停
    const stop = (item: any) => {
      state.curIndex = -1;
      state.isShowTip = true;
      state.curItem = item;
      window.cancelAnimationFrame(state.animateID);
    };

    // 鼠标离开恢复
    const start = (index: number) => {
      state.curIndex = index;
      state.isShowTip = false;
      animate();
    };

    const wordClick = (item: any) => {
      emit("word-click", item);
    };

    onMounted(() => {
      const dom = document.getElementById("wordCloud");
      state.width = (dom && dom.clientWidth) as number;
      state.height = (dom && dom.clientHeight) as number;
      init();
    });

    const { x, y, isOutside } = useMouseInElement(target);

    const tooltipStyle = computed(() => {
      return (x: number, y: number, isOutside: boolean) => {
        return (
          isOutside &&
          ({
            left: x + "px",
            top: y + "px",
          } as any)
        );
      };
    });

    return {
      state,
      stop,
      start,
      wordClick,
      tooltipStyle,
      x,
      y,
      isOutside,
    };
  },
});
</script>

<style lang="scss" scoped>
.wordCloud__tagBall {
  position: relative;
  width: 100%;
  height: 100%;
}

.wordCloud__tag {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  text-decoration: none;
  font-size: 15px;
  font-family: "微软雅黑";
  font-weight: bold;
  cursor: pointer;
}

.wordCloud__tag:hover {
  font-size: 25px;
}

.tooltip {
  position: absolute;
  color: #000;
  background: #fff;
  z-index: 99999;
  font-size: 12px !important;
  padding: 5px 10px;
  display: inline;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 8px;
}

.wordCloud__home {
  display: flex;
  justify-content: center;
}
</style>
