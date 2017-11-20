import * as types from './types'
export default {
  showNav:({commit,state},payload)=>{
    commit(types.SHOW_NAV)
  },
  hideNav:({commit,state},payload)=>{
    commit(types.HIDE_NAV)
  },
  showFoot:({commit,state},payload)=>{
    commit(types.SHOW_FOOT)
  },
  hideFoot:({commit,state},payload)=>{
    commit(types.HIDE_FOOT)
  },
  showLoading:({commit,state},payload)=>{
    commit(types.SHOW_LOADING)
  },
  hideLoading:({commit,state},payload)=>{
    commit(types.HIDE_LOADING)
  },
  setUserId:({commit,state},payload)=>{
    commit(types.USER_ID,payload)
  },
  setUserName:({commit,state},payload)=>{
    commit(types.USER_NAME,payload)
  },
  loginOk:({commit,state},payload)=>{
    commit(types.LOGIN_OK)
  },
  loginNo:({commit,state},payload)=>{
    commit(types.LOGIN_NO)
  },
  addItems:({commit,state},payload)=>{
    
    state.buycar=payload;
    
    commit(types.CHANGE_BUYCAR,[...state.buycar]);
  },
  addItem:({commit,state},payload)=>{
    let find=false;
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        find=true;
        // item.count++;
      }
    });
    if(!find){
      // payload.count=1;
      state.buycar.push(payload);
    }
    commit(types.CHANGE_BUYCAR,[...state.buycar]);
  },
  changeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        if(item.count<1){
          item.count=1;
        }else{
          item.count=Number(item.count)+payload.num;
        }
        
      }
    });
    commit(types.CHANGE_BUYCAR,[...state.buycar])
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.id==payload.id){
        state.buycar.splice(index,1);
      }
    })
    commit(types.CHANGE_BUYCAR,[...state.buycar]);
  },
  clearBuycar:(({commit})=>{
    commit(types.CLEAR_BUYCAR)
  })
}
