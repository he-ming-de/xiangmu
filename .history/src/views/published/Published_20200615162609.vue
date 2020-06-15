<template>
  <div>
    <template>
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%">
        <el-table-column label="#" type="index" align="center"></el-table-column>
        <el-table-column prop="title" label="标题" align="center"></el-table-column>
        <el-table-column prop="author" label="作者" align="center"></el-table-column>
        <el-table-column prop="category" label="类目" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.category==='Vue'">
              <el-tag type="success">{{scope.row.category}}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='React'">
              <el-tag type="info">{{scope.row.category}}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='Node.js'">
              <el-tag type="warning">{{scope.row.category}}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='性能优化'">
              <el-tag type="success">{{scope.row.category}}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='JavaScript'">
              <el-tag type="warning">{{scope.row.category}}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='小程序'">
              <el-tag type="danger">{{scope.row.category}}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='工具类'">
              <el-tag type="danger">{{scope.row.category}}</el-tag>
            </div>
            <div v-else-if="scope.row.category==='其他'">
              <el-tag>{{scope.row.category}}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="source" label="来源" align="center"></el-table-column>
        <el-table-column prop="star" label="重要性" align="center">
          <template slot-scope="scope">
            <el-rate disabled text-color="#ff9900" v-model="scope.row.star"></el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="发布时间" width="220" align="center"></el-table-column>
        <el-table-column label="操作" width="220" align="center">
          <template slot-scope="scope" class="d-f">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="success" @click="handleDeletel(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 10, 10, 10]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </div>
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
      tableData: [],
      pagesize: 10,
      currentPage: 1
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
            item.date = dayjs(item.date).format("YYYY年MM月DD日HH时mm分ss秒");
          });
          console.log(res.data);
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      this.$router.push('/edit')
    },
    handleDelete(index, row) {
      axios
        .post(`/api/article/delete`, { _id: row._id })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.getdata();
          }
        })
        .catch(err => {
          this.$message.error("删除失败");
        });
    },
    handleDeletel(index, row) {
      axios.post('/api/article/article',{
        _id: row._id
      }).then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
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