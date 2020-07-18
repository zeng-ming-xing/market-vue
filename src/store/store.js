import store from "../store"
import Vue from "../vue"

Vue.use(store)

const store = new store({
    state: {
        catList: []
    },
    mutations: {
        addcart(state, payload) {
            //查找数组中是否有相同的值,根据某种条件查找，item是数组中已经存在的值
            let oldproduct = state.catList.find(item => item.iid === payload.iid)
                //如果存在相同的值 则将原本数组中的count加一，如果没有相同的值，则将xin的值添加到数组中，并且设置count为1
            if (oldproduct) {
                oldproduct.count += 1;
            } else {
                payload.count = 1;
                state.catList.push(payload);
            }
        }
    }
})
export default store;