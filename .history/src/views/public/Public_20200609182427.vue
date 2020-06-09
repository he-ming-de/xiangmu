<template>
  <div>
    <el-container>
      <el-header class="nav d-f a-i-c c-f j-c-s-b">
        <div>欢迎{{obj.username}}来到小艾管理系统</div>
        <div>{{fist}}{{obj.username}} 上次登录时间：{{time}}</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div v-for="(item,index) in arr" :key="index"></div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  data() {
    return {
      obj: {},
      fist: {},
      time: "",
      arr: [
        { name: "首页", log: "el-icon-location", index: "1" },
        { name: "已发布", log: "el-icon-menu", index: "2" },
        { name: "统计", log: "el-icon-menu", index: "3" },
        { name: "发表文章", log: "el-icon-check", index: "4" },
        { name: "标签页", log: "el-icon-setting", index: "5" },
        { name: "导出excel", log: "el-icon-setting", index: "6" },
        { name: "图片上传", log: "el-icon-setting", index: "7" },
        { name: "退出", log: "el-icon-delete-solid", index: "8" }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.obj = JSON.parse(localStorage.getItem("user"));
    this.time = dayjs().format("YYYY年MM月DD日HH时mm分ss秒");
    let fist = dayjs().format("HH");
    if (fist > 5 && fist <= 11) {
      this.fist = "早上好，亲爱的";
    } else if (fist > 11 && fist <= 13) {
      this.fist = "中午好，亲爱的";
    } else if (fist > 13 && fist <= 17) {
      this.fist = "下午好，亲爱的";
    } else if (fist > 17 && fist <= 23) {
      this.fist = "晚上好，亲爱的";
    } else {
      this.fist = "该睡觉了，亲爱的";
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  background: rgb(46, 94, 133);
}
</style>