<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h1 @click="showName">{{name}}</h1>
    <h1>{{sex}}</h1>
    <h1>{{age}}</h1>
    <h1>{{myAge}}</h1>
    <button @click="updateAge()">尝试修改接收到的年龄</button><hr>
    
  </div>
</template>

<script>
// import { stringify } from 'querystring';
import { mixin } from '@/js/mixin';

export default {
  name: 'student',
  data() {
    return {
      msg:'prop的运用', 
      myAge:this.age,
    }
    
  },
  mixins:[mixin],
  methods: {
    updateAge() {
       this.myAge++;
       console.log( this.myAge++);
    },
  },
  // 简单声明接受
  // props: {name,sex,age}

  // 接收的同时对类型进行限制
  // props: {
  //   name:String,//
  //   sex:String,
  //   age:Number,
  // }

  // 接受的同时对数据:进行类型限制+默认值的指定+必要性的限制 
  props: {
    name:{
      type:String,  //name的类型是字符串
      require:true  //name是必要的
    },
    age:{
      type:Number,
      default:99  //默认值
    },
    sex:{
      type:String,
      require:true
    },
   
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
