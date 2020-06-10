<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
          <div class="b-c-f item">
            <ve-radar :data="chartData"></ve-radar>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <seconds></seconds>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <secondsh></secondsh>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Seconds from "./Seconds";
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
          "marketing",
          "delelopmer"
        ],
        rows: []
      }
    };
  },
  components: { Seconds },
  methods: {
    getdata() {
      axios
        .get(`/api/radarChat`)
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