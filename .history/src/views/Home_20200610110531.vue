
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple d-f j-c-s-b p1">
          <i class="iconfont icon-renqunfenxi"></i>
          <div>
            <div class="m-b1">New Visits</div>
            <countTo :startVal="startVal" :endVal="obj.visits" :duration="3000"></countTo>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple d-f j-c-s-b p1">
          <i class="iconfont icon-xiaoxi"></i>
          <div>
            <div class="m-b1">Messages</div>
            <countTo :startVal="startVal" :endVal="obj.messages" :duration="3000"></countTo>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple d-f j-c-s-b p1">
          <i class="iconfont icon-qian"></i>
          <div>
            <div class="m-b1">Purchases</div>
            <countTo :startVal="startVal" :endVal="obj.purchases" :duration="3000"></countTo>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple d-f j-c-s-b p1">
          <i class="iconfont icon-gouwuche"></i>
          <div>
            <div class="m-b1">Shopping</div>
            <countTo :startVal="startVal" :endVal="obj.shopping" :duration="3000"></countTo>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import First from "../public/Public";
import countTo from "vue-count-to";
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      obj: {},
      startVal: 0
    };
  },
  components: {
    countTo,
    First
  },
  methods: {
    getdata() {
      axios
        .get(`/api/homeData`)
        .then(res => {
          this.obj = res.data.data;
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.icon-renqunfenxi {
  font-size: 44px;
  color: rgb(68, 200, 197);
}
.icon-xiaoxi {
  font-size: 44px;
  color: rgb(59, 162, 244);
}
.icon-qian {
  font-size: 44px;
  color: rgb(242, 85, 111);
}
.icon-gouwuche {
  font-size: 44px;
  color: rgb(254, 186, 133);
}
</style>