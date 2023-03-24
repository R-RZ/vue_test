<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h1>{{adress }}</h1>
    <h1 style="background-color: aquamarine;" @click="showName">{{adressName}}</h1>
 
    <button @click="updateAge()">尝试修改接收到的年龄</button>
    
  </div>
</template>

<script>
// import { stringify } from 'querystring';
import { mixin } from '@/js/mixin';
export default {
  name: 'School',
  mixins:[mixin],
  data() {
    return {
      msg:'prop的运用', 
      adressName:this.name
    }
    
  },
  
  
  methods: {
 
  },
  // 接受的同时对数据:进行类型限制+默认值的指定+必要性的限制 
  props: {
    adress:{
      type:String,  //name的类型是字符串
      require:true  //name是必要的
    },
    name:{
      type:String,
      require:true
    },
   
  },
 
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
