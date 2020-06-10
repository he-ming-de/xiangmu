<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "First",
  props: {},
  data() {
    return {
      arr:[],
      chartData: {
        columns: ["expected", "actual", "expected", "expected"],
        rows: [
          
        ]
      }
    };
  },
  components: {},
  methods: {
    getdata(){
      axios.get(`/api/homeChat`).then(res=>{
        this.arr = res.data.data
        console.log(res);
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
</style>