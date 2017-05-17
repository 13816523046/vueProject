<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'I am 子组件'
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
    color:red;
}
</style>
