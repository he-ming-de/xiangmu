<template>
  <div class="m-t3">
    <el-row :gutter="20">
      <el-col :span="12">
        <!--<div class="grid-content bg-purple">
          <div class="d-f">
            <div>Order_No</div>
            <div>Price</div>
            <div>Status</div>
          </div>
          <div v-for="(item,index) in arr" :key="index" class="d-f">
            <div>{{item.num}}</div>
            <div>&yen;{{item.price}}</div>
            <div v-if="(item.status===0)">
              <button>padding</button>
            </div>
            <div v-else>
              <button>success</button>
            </div>
          </div> 
        </div>-->
        <el-table ref="filterTable" :data="tableData" style="width: 100%">
          <el-table-column            
          ></el-table-column>          
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions
              >{{scope.row.tag}}</el-tag>
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
      arr: []
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/orderData`)
        .then(res => {
          this.arr = res.data.data;
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