// @ts-check
import { VuexModule } from 'vuex-typed-modules'

export const testModule = new VuexModule({
  name: 'testModule',
  state: {
    count: 1,
    myProp: 'banana'
  },
  getters: {
    testGetter (state) {
      return state.myProp
    },
    testGetter2 (state) {
      return state.myProp
    }
  },
  mutations: {
    addCount (state, number) {
      state.count += number
    }
  },
  actions: {
    increment (context, count) {
      debugger

      context.commit('addCount', count + context.state.count)
    }
  }
})
