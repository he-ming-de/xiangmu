<template>
 <div>

 </div>
</template>

<script>
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
       axios.post(`/api/article/article`,{
        _id:row._id
      }).then(res=>{
        console.log(res.data.data);
      }).catch(err=>{
        console.log(err);
      })
  }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>