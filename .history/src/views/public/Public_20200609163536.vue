<template>
  <div>
    <el-container>
      <el-header></el-header>
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
export default {
  name: "",
  props: {},
  data() {
    return {
        obj:{}
    };
  },
  components: {
  },
  methods: {
  },
  mounted() {
      this.obj = JSON.parse(localStorage.getItem('user'))
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>