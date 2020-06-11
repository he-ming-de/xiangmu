<template>
  <div class="m-t3">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="num" label="Order_No" width="280px" align="center"></el-table-column>
          <el-table-column prop="price" label="Price" align="center">
            <template slot-scope="scope">
              <div>￥{{scope.row.price}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="Status" align="center">
            <template slot-scope="scope">
              <div v-if="scope.row.status===0">
                <el-tag type="danger">pedding</el-tag>
              </div>
              <div v-if="scope.row.status ===1">
                <el-tag type="success">success</el-tag>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <thirds></thirds>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <thirdsh></thirdsh>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Thirdsh from "./Thirdsh";
import Thirds from "./Thirds";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  components: {
    Thirds,
    Thirdsh
  },
  methods: {
    getdata() {
      axios
        .get(`/api/orderData`)
        .then(res => {
          this.tableData = res.data.data;
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
.bg-purple {
  background: #ffffff;
  border-radius: 5px;
}
</style>