<template>
  <div class="d-f">
    <div class="b-c-f item">
      <ve-radar :data="chartData"></ve-radar>
    </div>
    <div>
      <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 }
        ]
      },
      arr: [],
      chartData: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "marketing",
          "delelopmer"
        ],
        rows: []
      }
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/radarChat`)
        .then(res => {
          this.arr = res.data.data;
          this.chartData.rows = this.arr;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getdata() {
      axios
        .get(`/api/radarChat`)
        .then(res => {
          this.arr = res.data.data;
          this.chartData.rows = this.arr;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item {
  border-radius: 5px;
}
</style>