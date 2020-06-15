<template>
  <div>
    <h4>{{arr.title}}</h4>
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
    getdata() {
      axios
        .post(`/api/article/article`, {
          _id: this.arr._id
        })
        .then(res => {
          this.arr = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
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