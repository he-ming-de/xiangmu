<template>
  <div class="m-t3 b-c-f item">
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "First",
  props: {},
  data() {
    return {
      arr: [],
      chartData: {
        columns: ["date", "expected","", "actual"],
        rows: []
      }
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/homeChat`)
        .then(res => {
          this.arr = res.data.data;
          this.chartData.rows = this.arr;
          console.log(res);
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