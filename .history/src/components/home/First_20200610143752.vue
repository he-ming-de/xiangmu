<template>
  <div class="b-c-f item">
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
      chartData: {
        columns: ["date","", "expected", "actual"],
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
          this.chartData.rows = res.data.data;
          this.chartData.columns = Object.keys(res.data.data[0]);
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