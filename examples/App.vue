<template>
  <div class="wrap">
    <dynamic-word-cloud-vue3 :data="state.data" :color="state.color"></dynamic-word-cloud-vue3>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup(props, { emit }) {
    const state = reactive({
      data: [
        {
          name: "花鸟市场",
          value: 1446,
        },
        {
          name: "汽车",
          value: 928,
        },
        {
          name: "视频",
          value: 906,
        },
        {
          name: "电视",
          value: 825,
        },
        {
          name: "Lover Boy 88",
          value: 514,
        },
        {
          name: "动漫",
          value: 486,
        },
        {
          name: "音乐",
          value: 53,
        },
        {
          name: "直播",
          value: 163,
        },
        {
          name: "广播电台",
          value: 86,
        },
        {
          name: "戏曲曲艺",
          value: 17,
        },
        {
          name: "演出票务",
          value: 6,
        },
        {
          name: "给陌生的你听",
          value: 1,
        },
        {
          name: "资讯",
          value: 1437,
        },
        {
          name: "商业财经",
          value: 422,
        },
        {
          name: "娱乐八卦",
          value: 353,
        },
        {
          name: "军事",
          value: 331,
        },
        {
          name: "科技资讯",
          value: 313,
        },
        {
          name: "社会时政",
          value: 307,
        },
        {
          name: "时尚",
          value: 43,
        },
        {
          name: "网络奇闻",
          value: 15,
        },
        {
          name: "旅游出行",
          value: 438,
        },
        {
          name: "景点类型",
          value: 957,
        },
        {
          name: "国内游",
          value: 927,
        },
        {
          name: "远途出行方式",
          value: 908,
        },
        {
          name: "酒店",
          value: 693,
        },
        {
          name: "关注景点",
          value: 611,
        },
        {
          name: "旅游网站偏好",
          value: 512,
        },
        {
          name: "出国游",
          value: 382,
        },
        {
          name: "交通票务",
          value: 312,
        },
        {
          name: "旅游方式",
          value: 187,
        },
        {
          name: "旅游主题",
          value: 163,
        },
        {
          name: "港澳台",
          value: 104,
        },
        {
          name: "本地周边游",
          value: 3,
        },
        {
          name: "小卖家",
          value: 1331,
        },
        {
          name: "全日制学校",
          value: 941,
        },
        {
          name: "基础教育科目",
          value: 585,
        },
        {
          name: "考试培训",
          value: 473,
        },
        {
          name: "语言学习",
          value: 358,
        },
        {
          name: "留学",
          value: 246,
        },
        {
          name: "K12课程培训",
          value: 207,
        },
        {
          name: "艺术培训",
          value: 194,
        },
        {
          name: "技能培训",
          value: 104,
        },
        {
          name: "IT培训",
          value: 87,
        },
        {
          name: "高等教育专业",
          value: 63,
        },
        {
          name: "家教",
          value: 48,
        },
        {
          name: "体育培训",
          value: 23,
        },
        {
          name: "职场培训",
          value: 5,
        },
        {
          name: "金融财经",
          value: 1328,
        },
        {
          name: "银行",
          value: 765,
        },
        {
          name: "股票",
          value: 452,
        },
        {
          name: "保险",
          value: 415,
        },
        {
          name: "贷款",
          value: 253,
        },
        {
          name: "基金",
          value: 211,
        },
        {
          name: "信用卡",
          value: 180,
        },
        {
          name: "外汇",
          value: 138,
        },
        {
          name: "P2P",
          value: 116,
        },
        {
          name: "贵金属",
          value: 98,
        },
      ],
      color: ["#2D4DB6", "#04B67C", "#D1AF07", "#E27914", "#CB4A4D", "#B02690"],
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrap {
  width: 800px;
  height: 800px;
}
</style>
