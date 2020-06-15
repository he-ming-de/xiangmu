<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios'
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
    // getdata() {
    //   axios
    //     .get(`/api/article/allArticle`)
    //     .then(res => {
    //       this.arr = res.data.data;
    //       console.log(res.data.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    getdata(){
        axios.post('/api/article/article',{
        _id: this.arr._id
      }).then(res=>{
        console.log(res.data);
        this.arr=res.data.data
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