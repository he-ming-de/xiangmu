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
        columns: [],
        rows: [   
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
    getdatas() {
      axios
        .get(`/api/ringChat`)
        .then(res => {
        //   this.arr = res.data.data;
        //   this.chartData.rows = this.arr;
        console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
    getdatas()
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