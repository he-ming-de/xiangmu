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
axios.get(`/api/tableData`)
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