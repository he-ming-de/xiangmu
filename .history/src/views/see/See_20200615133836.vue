<template>
  <div>
    <h4>{{arr.title}}</h4>
  </div>
</template>

<script>
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
          _id: row._id
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