<template>
  <div>
    <div class="d-f item c-f">
      <div class="item1 d-f a-i-c f1">
        <div class="f-d-c a-i-c item5 p-t1 p-b1">
          <div>今日发布</div>
          <div>1</div>
        </div>
        <i class="el-icon-check p-r2"></i>
      </div>
      <div class="item2 d-f a-i-c f1">
        <div class="f-d-c a-i-c item5">
          <div>原创文章</div>
          <div>1</div>
        </div>
        <i class="el-icon-tickets p-r2"></i>
      </div>
      <div class="item3 d-f a-i-c f1">
        <div class="f-d-c a-i-c item5">
          <div>新留言</div>
          <div>0</div>
        </div>
        <i class="el-icon-bell p-r2"></i>
      </div>
      <div class="item4 d-f a-i-c f1">
        <div class="f-d-c a-i-c item5">
          <div>新消息</div>
          <div>0</div>
        </div>
        <i class="el-icon-phone-outline p-r2"></i>
      </div>
    </div>
    <div class="d-f j-c-s-a m-t2">
      <div class="pie">
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div class="pie">
        <ve-ring :data="chartDatas" :settings="chartSettings"></ve-ring>
      </div>
    </div>
    <div>
      <ve-waterfall :data="chartDatash"></ve-waterfall>
    </div>
  </div>
</template>

<script>
import groupBy from "lodash/groupBy";
import axios from "axios";
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  data() {
    this.chartSettings = {
      roseType: "radius"
    };
    return {
      chartData: {
        columns: ["分类", "数量"],
        rows: []
      },
      chartDatas: {
        columns: ["分类", "数量"],
        rows: []
      },
      chartDatash: {
        columns: ["分类", "数量"],
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
          let obj = groupBy(res.data.data, "category");
          for (let i in obj) {
            this.chartData.rows.push({
              数量: obj[i].length,
              分类: i
            });
          }
          let object = groupBy(res.data.data, "source");
          for (let j in object) {
            this.chartDatas.rows.push({
              数量: object[j].length,
              分类: j
            });
          }
          let objectch = groupBy(res.data.data, "date");
          let date = dayjs.format("YYYY年MM月DD日")
          for (let h in objectch) {
            this.chartDatash.rows.push({
              数量: objectch[h].length,
              分类: h
            });
          }
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
.pie {
  width: 400px;
}
</style>