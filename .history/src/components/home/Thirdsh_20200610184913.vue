<template>
  <div>
    <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" />
    <div v-for="(item,index) in arr" :key="index">
    <div></div>
      <el-progress :percentage="progress"></el-progress>
      <el-progress :percentage="progress" status="success"></el-progress>
    </div>
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
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    getdata() {
      axios
        .get(`/api/progress`)
        .then(res => {
          this.arr = res.data.data;
          console.log(res);
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
</style>