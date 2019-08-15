import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    count: 0,
}
const mutations = {
    mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
}

// 异步操作
const actions = {
    actionsAddCount(context, n = 0) {
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
}

const getters = {
    getterCount(state, n = 0) {
        return (state.count += n)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})