<template>
  <div>
    <div class="b-c-f item">
      <ve-radar :data="chartData"></ve-radar>
      <Seconds></Seconds>
    </div>
  </div>
</template>

<script>
import Seconds from "./Seconds"
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: [
          "name",
          "sales",
          "ministration",
          "techology",
          "delelopmer",
          "marketing"
        ],
        rows: []
      }
    };
  },
  components: {Seconds},
  methods: {
    getdata() {
      axios
        .get(`/api/radarChat`)
        .then(res => {
          this.arr = res.data.data;
          this.chartData.rows = this.arr;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
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