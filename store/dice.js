export const state = () => ({
  reverse: false,
  userValue: 0
})

export const getters = {
  REVERSE: (state) => {
    return state.reverse
  },
  USER_VALUE: (state) => {
    return state.userValue
  }
}

export const mutations = {
  INVERT_REVERSE: (state) => {
    state.reverse = !state.reverse
  },
  SET_USER_VALUE: (state, payload) => {
    state.userValue = payload
  }
}
