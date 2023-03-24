<template>
  <div >
   <h1>当前求和为:{{$store.state.sum }}</h1>
   <h1>将数字扩大十倍：{{$store.getters.bigSum}}</h1>
   <h1>将数字扩大十倍：{{bigSum}}</h1>
   <h1>{{goushi}}</h1>
   <h1>{{w}}</h1>
 
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="addName">添加一个学生</button><br>
  
    <h1 v-for="item in student" :key="item.id">{{item.name}}</h1>
   <select v-model.number="n">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
   </select>
   <!-- <h1>当前的值：{{}}</h1> -->
   
   <button @click="increment">+</button>
   <button @click="dercrement">-</button>
   <button @click="incrementOdd">当前求和奇数再加</button>
   <button @click="incrementWait">等一等再加</button>
    
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
     n:1,  //用户选择的数字
     name:'',
     id:'',
     age:'',
     
    }
  },
  methods: {
    addName(name){
      // const stu = {id:11,name:'hhha',age:18};
      const obj = {id:this.id,name:this.name,age:this.age}
      this.$store.commit('addStudent',obj)
    },

    increment(){
      this.$store.commit('JIA',this.n)


    },
    dercrement(){
      this.$store.commit('JIAN',this.n)

    },
    incrementOdd(){
      this.$store.commit('countOdd',this.n)

    },
    incrementWait(){
      // setTimeout(() => {
      //   this.sum += this.n
      // }, 500);

    },
  },
  computed: {
    student(){
      return this.$store.state.student
    },
    ...mapState(['sum','goushi','w']),
    // bigSum(){
    //    return this.$store.getters.bigSum
    // }
    ...mapGetters(['bigSum'])
  },
  mounted() {
    // console.log('APP',this);
  },

 
}
</script>

<style scoped>

</style>
