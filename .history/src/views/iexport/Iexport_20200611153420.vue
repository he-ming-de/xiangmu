<template>
  <div>
    <div>
      <input type="text" placeholder="请输入你想搜索的商品名称" class="inputs" />
    </div>
    <div class="d-f j-c-s-b m-t2">
      <el-table :data="tableData.slice((currentpage-1)*pagesize,currentpage*pagesize)" style="width: 100%">
        <el-table-column label="名称" width="400" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品编号" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
          </template>
        </el-table-column>
        <el-table-column label="原价" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
          </template>
        </el-table-column>
        <el-table-column label="现价" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i>修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30, 40,50,60,70]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="7000"
      ></el-pagination>
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
      tableData: [],
      currentpage: 1,
      pagesize: 10
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/tableData`)
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentpage = val;
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
.inputs {
  width: 260px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding-left: 20px;
  outline: none;
}
</style>