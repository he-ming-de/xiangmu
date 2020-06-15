<template>
 <div>

 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
      getdata(){
        axios.get(`/api/article/allArticle`).then(res=>{
          console.log(res.data);
        }).catch(err=>{
          console.log(err);
        })
      }
   },
   mounted() {
this.getdata()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>