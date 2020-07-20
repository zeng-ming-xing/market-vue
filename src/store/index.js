import Vuex from "vuex"
import Vue from "vue"
//挂载vuex
Vue.use(Vuex)
    //创建vuex对象
const store = new Vuex.Store({
    state: {
        catList: []
    },
    mutations: {
        //该属性中的方法尽可能单一
        addcounter(state, payload) {
            payload.count++;
        },
        addtocart(state, payload) {
            payload.checked = true;
            state.catList.push(payload)
        }
    },
    actions: {
        addcart(context, payload) {
            //查找数组中是否有相同的值,根据某种条件查找，item是数组中已经存在的值
            let oldproduct = context.state.catList.find(item => item.iid === payload.iid)
                //如果存在相同的值 则将原本数组中的count加一，如果没有相同的值，则将xin的值添加到数组中，并且设置count为1
            if (oldproduct) {
                context.commit("addcounter", oldproduct)
            } else {
                payload.count = 1;
                context.commit("addtocart", payload);
            }
        }

    },
    getters: {
        cartL(state) {
            return state.catList.length
        },
        cartlist(state) {
            return state.catList
        }
    }
})
export default store;