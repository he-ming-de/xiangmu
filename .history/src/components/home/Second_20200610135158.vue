<template>
  <div>
    <div class="b-c-f item">
      <ve-line :data="chartData"></ve-line>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      chartData: {
        columns: ["date", "", "expected", "actual"],
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
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item {
  border-radius: 5px;
}
</style>