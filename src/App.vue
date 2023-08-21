<script setup lang="ts">
import { reactive } from "vue";

const config = reactive({
  data: [
    {
      name: "周口",
      value: 55,
    },
    {
      name: "南阳",
      value: 120,
    },
    {
      name: "西峡",
      value: 78,
    },
    {
      name: "驻马店",
      value: 66,
    },
    {
      name: "新乡",
      value: 80,
    },
    {
      name: "信阳",
      value: 45,
    },
    {
      name: "漯河",
      value: 29,
    },
  ],
  unit: "万元",
});

const conf = reactive({
  lineWidth: 24,
  digitalFlopStyle: {
    fill: "pink",
  },
  data: [
    {
      name: "杭州",
      value: 98,
    },
    {
      name: "金华",
      value: 150,
    },
    {
      name: "宁波",
      value: 62,
    },
    {
      name: "太原",
      value: 54,
    },
  ],
});

const cityConfig = reactive({
  points: [
    {
      name: "郑州",
      coordinate: [0.48, 0.35],
      halo: {
        show: true,
      },
      icon: {
        width: 30,
        height: 30,
      },
      text: {
        show: false,
      },
    },
    {
      name: "新乡",
      coordinate: [0.52, 0.23],
    },
    {
      name: "焦作",
      coordinate: [0.43, 0.29],
    },
    {
      name: "开封",
      coordinate: [0.59, 0.35],
    },
    {
      name: "许昌",
      coordinate: [0.53, 0.47],
    },
    {
      name: "平顶山",
      coordinate: [0.45, 0.54],
    },
    {
      name: "洛阳",
      coordinate: [0.36, 0.38],
    },
    {
      name: "周口",
      coordinate: [0.62, 0.55],
      halo: {
        show: true,
        color: "#8378ea",
      },
    },
    {
      name: "漯河",
      coordinate: [0.56, 0.56],
    },
    {
      name: "南阳",
      coordinate: [0.37, 0.66],
      halo: {
        show: true,
        color: "#37a2da",
      },
    },
    {
      name: "信阳",
      coordinate: [0.55, 0.81],
    },
    {
      name: "驻马店",
      coordinate: [0.55, 0.67],
    },
    {
      name: "济源",
      coordinate: [0.37, 0.29],
    },
    {
      name: "三门峡",
      coordinate: [0.2, 0.36],
    },
    {
      name: "商丘",
      coordinate: [0.76, 0.41],
    },
    {
      name: "鹤壁",
      coordinate: [0.59, 0.18],
    },
    {
      name: "濮阳",
      coordinate: [0.68, 0.17],
    },
    {
      name: "安阳",
      coordinate: [0.59, 0.1],
    },
  ],
  lines: [
    {
      source: "新乡",
      target: "郑州",
    },
    {
      source: "焦作",
      target: "郑州",
    },
    {
      source: "开封",
      target: "郑州",
    },
    {
      source: "周口",
      target: "郑州",
      color: "#fb7293",
      width: 2,
    },
    {
      source: "南阳",
      target: "郑州",
      color: "#fb7293",
      width: 2,
    },
    {
      source: "济源",
      target: "郑州",
    },
    {
      source: "三门峡",
      target: "郑州",
    },
    {
      source: "商丘",
      target: "郑州",
    },
    {
      source: "鹤壁",
      target: "郑州",
    },
    {
      source: "濮阳",
      target: "郑州",
    },
    {
      source: "安阳",
      target: "郑州",
    },
    {
      source: "许昌",
      target: "南阳",
      color: "#37a2da",
    },
    {
      source: "平顶山",
      target: "南阳",
      color: "#37a2da",
    },
    {
      source: "洛阳",
      target: "南阳",
      color: "#37a2da",
    },
    {
      source: "驻马店",
      target: "周口",
      color: "#8378ea",
    },
    {
      source: "信阳",
      target: "周口",
      color: "#8378ea",
    },
    {
      source: "漯河",
      target: "周口",
      color: "#8378ea",
    },
  ],
  icon: {
    show: true,
  },
  text: {
    show: true,
  },
  k: 0.5,
});

const configTable = reactive({
  header: ["列1", "列2", "列3"],
  data: [
    ["行1列1", "行1列2", "行1列3"],
    ["行2列1", "行2列2", "行2列3"],
    ["行3列1", "行3列2", "行3列3"],
    ["行4列1", "行4列2", "行4列3"],
    ["行5列1", "行5列2", "行5列3"],
    ["行6列1", "行6列2", "行6列3"],
    ["行7列1", "行7列2", "行7列3"],
    ["行8列1", "行8列2", "行8列3"],
    ["行9列1", "行9列2", "行9列3"],
    ["行10列1", "行10列2", "行10列3"],
  ],
  index: true,
  columnWidth: [50],
  align: ["center"],
});
</script>

<template>
  <dv-full-screen-container class="px-[20px]">
    <header class="flex justify-between item-center mt-[10px]">
      <dv-decoration8 style="width: 500px; height: 50px" />
      <div class="text-center">
        <span class="text-white text-center text-xl">数据大屏</span>
        <dv-decoration5 :dur="2" style="width: 700px; height: 40px" />
      </div>
      <dv-decoration8 :reverse="true" style="width: 500px; height: 50px" />
    </header>
    <main class="w-full flex justify-between item-center">
      <!-- left -->
      <section class="w-[30vw] mt-[3vh]">
        <div class="w-[30vw] h-[30vh]">
          <dv-border-box8 :reverse="true">
            <div class="text-white p-2">招商排行榜</div>
            <div class="w-full h-[901%] flex justify-center">
              <dv-conical-column-chart
                :config="config"
                style="width: 400px; height: 200px"
              />
            </div>
          </dv-border-box8>
        </div>
        <div class="h-[35vh] mt-[10vh]">
          <div class="text-white">业绩趋势</div>
          <dv-border-box10>
            <!-- 排名轮播 -->

            <dv-scroll-ranking-board :config="config" class="w-[28vw] p-4" />
          </dv-border-box10>
        </div>
      </section>

      <!-- center -->
      <section class="w-[30vw]">
        <div class="w-[30vw] h-[20vh]">
          <dv-border-box12>
            <div class="text-white p-2 text-center">数据概览</div>
            <div class="flex justify-between px-[3vw] h-[90%]">
              <div small-bg>
                <dv-decoration-12 style="width: 140px; height: 140px" />
              </div>
              <dv-decoration-9 style="width: 140px; height: 140px">
                <div color-green font-600 class="content text-white">66%</div>
              </dv-decoration-9>
            </div>
          </dv-border-box12>
        </div>
        <div class="w-[30vw] h-[30vh] mt-[10px]">
          <dv-border-box12>
            <div class="text-white p-2 text-center">Echarts</div>
            <div class="w-full h-[90%]">
              <dv-flyline-chart-enhanced
                :config="cityConfig"
                :dev="true"
                style="width: 100%; height: 100%"
              />
            </div>
          </dv-border-box12>
        </div>
        <div class="w-[30vw] h-[25vh] mt-[10px]">
          <dv-border-box12>
            <div class="text-white p-2 text-center">小组排行榜</div>
            <div class="flex items-center">
              <dv-capsule-chart
                :config="config"
                style="width: 25rem; height: 12rem"
              />
              <dv-active-ring-chart
                :config="conf"
                style="width: 200px; height: 200px"
              />
            </div>
          </dv-border-box12>
        </div>
      </section>
      <!-- right -->
      <section class="w-[30vw] mt-[3vh]">
        <div class="w-[30vw] h-[30vh]">
          <dv-border-box8 :reverse="true">
            <div class="text-white p-2">渠道排行榜</div>
            <div class="flex justify-center w-full">
              <dv-scroll-board
                :config="configTable"
                style="width: 500px; height: 220px"
              />
            </div>
          </dv-border-box8>
        </div>
        <!-- 业绩趋势 -->
        <div class="h-[35vh] mt-[10vh]">
          <div class="text-white">业绩趋势</div>
          <dv-border-box10>
            <dv-scroll-ranking-board :config="config" class="w-[28vw] p-4" />
          </dv-border-box10>
        </div>
      </section>
    </main>
  </dv-full-screen-container>
</template>

<style scoped></style>
