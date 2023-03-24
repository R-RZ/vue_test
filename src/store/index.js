// 该文件用于创建vuex最为核心的store
// import { push } from 'core-js/core/array'
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)




// 准备action——用于相应组件中的动作
const actions = {
  //   jia(context,value){ 
	// 	context.commit('JIA',value);
  //   // console.log('actions中的jia被调用了',context,value)
	// },
}
// 准备mutations——用于操作数据(state)
const mutations = {
    JIA(state,value){
      // console.log('mutations中的JIA被调用了',state);
    return state.sum ++
    console.log('mutations中的JIA被调用了',value);
},
JIAN(state,value){
  return state.sum --
  console.log('mutations中的JIA被调用了',value);
},
countOdd(state,value){
  if(state.sum % 2){
    console.log('1111',state.sum);
    return state.sum ++
    console.log('22222',state);
  }
},
addStudent(state,obj){
  return state.student.unshift(obj)
}

}



// 用于将state的数据进行加工
const getters = {
  bigSum(state){
    return state.sum * 10
  }
}

// 准备state——用于存储数据
const state = {
  sum:0,
  goushi:'go death',
  w:'22222的意志',
  student:[
    {id:11111,name:'里斯',age:19},
  ],
}



export default new Vuex.Store({
  
    actions,
    mutations,
    state,
    getters

})