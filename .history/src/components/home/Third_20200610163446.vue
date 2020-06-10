<template>
  <div class="m-t3">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          
          <div v-for="(item,index) in arr" :key="index" class="d-f">
          <div>{{item.num}}</div>
          <div>{{item.price}}</div>
          <div v-if="()"></div>
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
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
        arr:[]
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get(`/api/orderData`)
        .then(res => {
            this.arr=res.data.data
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
.grid-content {
  height: 100px;
}
</style>