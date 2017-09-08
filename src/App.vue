<style>
  body{
    margin:0;
    padding:0;
  }
.container{
  padding-top:200px;
  display:flex;
  justify-content:center
}
button{
    position: relative;
    display: inline-block;

    padding: 6px 12px;
    margin-bottom: 5px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    color: #333;
    text-align: center;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    color: #fff;
    background-color: #47c9bc;
    border: 1px solid #47c9bc;
}


</style>
<template>
  <div id="app">
  <div class="container">
      <div>	
        <button @click="alert">Alert</button>
      </div>
      <div>
        <button @click="confirm">Confirm</button>
      </div>
      <div>
        <button @click="toast">Toast</button>
      </div>
    
  </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'app',
    data () {
      return {
        show: false
      }
    },
    methods: {
      alert () {
        this.$alert('欢迎使用 songhao-vue-messagebox', {
          title: '提示',
          btn: {
            text: '确定'
          }
        })
        .then(()=>{
          this.$toast('你点击了确定');
        })
      },
      confirm () {
        this.$confirm('欢迎使用 songhao-vue-messagebox', {
          title: '提示',
          style: {
            'font-size': '16px'
          },
          yes: {
            text: '新按钮',
            style: {
              'font-size': '16px'
            }
          }
        })
          .then(()=>{
            this.$toast('你点击了确定');
          })
          .catch(()=>{
            this.$toast('你点击了取消');
          })
      },
      toast () {
        this.$toast('this is a toast!', 2000);
      }
    }
  }
</script>