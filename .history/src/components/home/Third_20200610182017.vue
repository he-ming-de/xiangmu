<template>
  <div class="m-t3">
    <el-row :gutter="20">

    
      <el-col :span="12">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="num" label="Order_No" width="280px"></el-table-column>
          <el-table-column prop="price" label="Price"></el-table-column>
          <el-table-column prop="status" label="Status">
            <template slot-scope="scope">
            <div v-if="scope.row.status"></div>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      tableData: []
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/orderData`)
        .then(res => {
          this.tableData = res.data.data;
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
.bg-purple {
  background: #ffffff;
  border-radius: 5px;
}
</style>