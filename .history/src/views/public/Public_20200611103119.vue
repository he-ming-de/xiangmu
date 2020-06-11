<template>
  <div class="item">
    <el-container>
      <el-header class="nav d-f a-i-c c-f j-c-s-b">
        <div>欢迎{{obj.username}}来到小艾管理系统</div>
        <div>{{hello}}{{obj.username}} 上次登录时间：{{time}}</div>
      </el-header>
      <el-container>
        <el-aside width="200px" height="100%">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                router
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="rgb(52,64,85)"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <div class="sidebar">
                  <div v-for="(item,index) in arr" :key="index">
                    <el-menu-item :index="item.index">
                      <i :class="item.log"></i>
                      {{item.name}}
                    </el-menu-item>
                  </div>
                </div>
                <br />
              </el-menu>
            </el-col>
          </el-row>
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
      hello: {},
      time: "",
      arr: [
        { name: "首页", log: "el-icon-location", index: "1" },
        { name: "已发布", log: "el-icon-menu", index: "2" },
        { name: "统计", log: "el-icon-menu", index: "3" },
        { name: "发表文章", log: "el-icon-check", index: "4" },
        { name: "标签页", log: "el-icon-setting", index: "5" },
        { name: "导出excel", log: "el-icon-setting", index: "6" },
        { name: "图片上传", log: "el-icon-setting", index: "7" },
        { name: "退出", log: "el-icon-delete-solid", index: "" }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.obj = JSON.parse(localStorage.getItem("user"));
    this.time = dayjs().format("YYYY年MM月DD日HH时mm分ss秒");
    let hello = dayjs().format("HH");
    if (hello > 5 && hello <= 11) {
      this.hello = "早上好,亲爱的";
    } else if (hello > 11 && hello <= 13) {
      this.hello = "中午好,亲爱的";
    } else if (hello > 13 && hello <= 17) {
      this.hello = "下午好,亲爱的";
    } else if (hello > 17 && hello <= 23) {
      this.hello = "晚上好,亲爱的";
    } else {
      this.hello = "该睡觉了,亲爱的";
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  background: rgb(46, 94, 133);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.sidebar {
  background: rgb(52, 64, 85);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 200px;
  top: 60px;
}
.el-col-12 {
  width: 100%;
}
.item {
  background: rgb(240, 242, 245);
}
</style>