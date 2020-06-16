<template>
  <el-card shadow="always">
    <div class="p1">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" width="100%" />
      <div class="padd">
        <div v-for="(item,index) in arr" :key="index" class="m-t2">
          <div>{{item.name}}</div>
          <div v-if="item.progress !==1">
            <el-progress :percentage="item.progress*100"></el-progress>
          </div>
          <div v-if="item.progress===1">
            <el-progress :percentage="100" status="success"></el-progress>
          </div>
        </div>
      </div>
    </div>
  </el-card>
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
        .get(`/api/progress`)
        .then(res => {
          this.arr = res.data.data;
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
.padd{
  padding-bottom: 40px;
}
</style>