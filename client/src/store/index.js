
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
    state:{
        showData:'fff'
    },
    mutations:{
        saveShowData(state,showData){
            state.showData=showData;
        }
    },
    actions:{
        saveShowDataAction(context,showData1) {

            // setTimeout(() => {
            //     // 提交同步
                      
            //           }, 100)
             context.commit("saveShowData",showData1);
            }
          
    }
})