<template>
  <div>
    <p>啦啦啦玩玩vue</p>
    <h1>{{msg}}</h1>
    <input type="" name="" v-model="msg">
    <sun></sun>
  </div>
</template>

<script>
var sun = require('./Sun.vue');
export default {
  data () {
    return {
      msg: 'Welcome to my Vue.js App'
    }
  },
  components: { sun }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
input{
  width: 300px;
  height: 50px;
  border: 1px solid #000;
  font-size: 20px;
}
</style>
