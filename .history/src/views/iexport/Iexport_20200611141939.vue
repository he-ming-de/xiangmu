<template>
 <div>
  <div>
  <input type="text" placeholder="请输入商品名称">
  </div>
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
axios.get(`/api/tableData`).then(res=>{
    console.log(res);
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