<template>
  <div class="demo-input-size">
    <el-input

      v-model="input1"
      size="medium"
      placeholder="搜索菜单"
      value="搜索菜单"
      suffix-icon="el-icon-search"
    />
  </div>
</template>

<script>
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/input.css'

export default {
  name: 'Search',
  data() {
    return {
      input1: ''
    }
  }
}
</script>

<style lang="scss">

    .demo-input-size {
      width: 200px;
      height: 40px;
      margin: 20px auto;
         .el-input__inner{
            background-color: #374850;
            border: none;
            outline: none;
        }
        .el-input__inner:focus{
            background-color: #fff;

        }
      }

</style>
