// 该文件用于创建vuex最为核心的store
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用vuex插件
Vue.use(Vuex)

// 准备action——用于相应组件中的动作
const actions = {}
// 准备mutations——用于操作数据(state)
const mutations = {}
// 准备state——用于存储数据
const state = {}

export default new Vuex.Store({
    actions,
    mutations,
    state

})