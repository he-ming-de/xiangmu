<template>
  <div>
    <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
      gettada(){
          axios.get(`/api/progress`).then(res=>{
              console.log(res);
          }).catch(err => {
              console.log(err);
          })
      }
  },
  mounted() {
      this.gettada()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>