<template>
  <div class="m-t3">
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
import secondsh from "./Secondsh";
import Seconds from "./Seconds";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      }
    };
  },
  components: {
    Seconds,
    secondsh
  },
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