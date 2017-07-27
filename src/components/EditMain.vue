<template>
  <div style="height:100%;">
    <div class="toolBar" id="toolBar">
      <div id="bar_editor">
        <i class="fa fa-arrows-alt" id="enterOrExitFullScreen_Edit" @click="fullScreen($event,1)"></i>
      </div>
      <div id="bar_preview">
        <i class="fa fa-arrows-alt" id="enterOrExitFullScreen_View" @click="fullScreen($event,2)"></i>
      </div>
      
    </div>
    <write id="write"></write>
    <preview id="preview"></preview>
  </div>
</template>

<script>
import Write from '@/components/Write'
import Preview from '@/components/Preview'
require('font-awesome/css/font-awesome.css')

export default {
  name: 'eidtMain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Write,
    Preview
  },
  methods: {
    fullScreen: function (event, type) {
      var main = type === 1 ? 'write' : 'preview'
      var secondary = type === 1 ? 'preview' : 'write'
      var actionObj = type === 1 ? 'enterOrExitFullScreen_Edit' : 'enterOrExitFullScreen_View'
      var hideToolbar = type === 1 ? 'bar_preview' : 'bar_editor'
      var showToolbar = type === 1 ? 'bar_editor' : 'bar_preview'

      if (document.getElementById(actionObj).classList.contains('fa-arrows-alt')) {
        document.getElementById(main).style.width = '80%'
        document.getElementById(main).style.marginLeft = '10%'
        document.getElementById(actionObj).classList.remove('fa-arrows-alt')
        document.getElementById(actionObj).classList.add('fa-columns')
        document.getElementById(secondary).style.display = 'none'
        document.getElementById(showToolbar).style.left = '98%'
        document.getElementById(hideToolbar).style.display = 'none'
        if (type === 2) {
          document.getElementById(main).style.float = 'none'
          document.getElementById(main).style.borderLeft = '0px solid #FFF'
        }
      } else {
        document.getElementById(main).style.width = '49%'
        document.getElementById(main).style.marginLeft = '0'
        document.getElementById(actionObj).classList.remove('fa-columns')
        document.getElementById(actionObj).classList.add('fa-arrows-alt')
        document.getElementById(secondary).style.display = 'block'
        document.getElementById(showToolbar).style.left = '48%'
        document.getElementById(hideToolbar).style.display = 'block'
        if (type === 2) {
          document.getElementById(showToolbar).style.left = '98%'
          document.getElementById(main).style.float = 'right'
          document.getElementById(main).style.borderLeft = '5px solid #FFF'
        }
      }
    }
  }
}
</script>

<style scoped>
.write{
  width:49%;
  height:100%;
  background: #F9F9F5;
  float: left; 
}
.preview{
  width:49%;
  height:100%;
  float: right;
  border-left: 5px solid #FFF;
  padding: 0px 10px;
  overflow-y: scroll;
}

#bar_editor{
  position: fixed;
  left: 48%;
}

#bar_preview{
  position: fixed;
  left:98%;
}

.fa{
  opacity:0.5;
  cursor: pointer;
}
</style>
