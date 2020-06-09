<template>
  <div>
    <el-container>
      <el-header class="nav d-f a-i-c c-f j-c-s-b">
        <div>欢迎{{obj.username}}来到小艾管理系统</div>
        <div>{{}}{{obj.username}} 上次登录时间：{{time}}</div>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  data() {
    return {
      obj: {}
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.obj = JSON.parse(localStorage.getItem("user"));
    this.time = dayjs(this.obj.date).format('YYYY年MM月DD日HH时mm分ss秒')
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