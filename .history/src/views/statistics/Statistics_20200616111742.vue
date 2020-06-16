<template>
  <div>
    
  </div>
</template>

<script>
import groupBy from "lodash/groupBy";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: ["数量", "分类"],
        rows: []
      }
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/article/allArticle`)
        .then(res => {
          console.log(res.data);
          let obj = groupBy(res.data.data, "category");
          for (let i in obj) {
            this.chartData.row.push({
              数量: obj[i].length,
              分类: i
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdata()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item1 {
  background: rgb(124, 202, 191);
  justify-content: flex-end;
}
.item2 {
  background: rgb(232, 138, 135);
  justify-content: flex-end;
}
.item3 {
  background: rgb(131, 117, 163);
  justify-content: flex-end;
}
.item4 {
  background: rgb(159, 206, 193);
  justify-content: flex-end;
}
.item {
  width: 100%;
}
.item5 {
  padding-right: 90px;
}
</style>