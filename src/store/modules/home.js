const state = {
  msg: "Hello World",
}

const mutations = {
  setMsg(state, msg) {
    state.msg = msg
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
