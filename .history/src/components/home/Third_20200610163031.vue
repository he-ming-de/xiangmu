<template>
  <div class="m-t3">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div class="d-f c-c">
            <div>Order_No</div>
            <div>Price</div>
            <div>Status</div>
          </div>
        </div>
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
import axios from "axios"
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
      getdata(){
        axios.get(`/api/orderData`).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })  
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
.bg-purple {
  background: #ffffff;
  border-radius: 5px;
}
.grid-content {
  height: 100px;
}
</style>