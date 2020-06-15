<template>
  <div>
    <template>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="author" label="作者"></el-table-column>
        <el-table-column prop="category" label="类目"></el-table-column>
        <el-table-column prop="source" label="来源"></el-table-column>
        <el-table-column prop="star" label="重要性">
          <template slot-scope="scope">
            <el-rate disabled text-color="#ff9900" v-model="scope.row.star"></el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="发布时间" width="220"></el-table-column>
        <el-table-column label="操作" width="220">
          <template slot-scope="scope" class="d-f">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="success" @click="handleDeletel(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
import axios from "axios";
import dayjs from "dayjs";
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
        .get(`/api/article/allArticle`)
        .then(res => {
          res.data.data.map(item => {
            item.star = item.star * 1;
            item.date = dayjs(item.date).format("YYYY年MM月DD日HH时mm分ss秒")
          });
          console.log(res.data);
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      axios.get(`/api/article/delete`).then(res=>{
        if(res.data===200){
          this.$message({
            res
          })
        }
      })
      console.log(index, row);
    },
    handleDeletel(index, row) {
      console.log(index, row);
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
</style>