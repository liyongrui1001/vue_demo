import * as types from './types'
export default {
  [types.SHOW_NAV]:(state)=>{
    state.bNav=true;
  },
  [types.HIDE_NAV]:(state)=>{
    state.bNav=false;
  },
  [types.SHOW_FOOT]:(state)=>{
    state.bFoot=true;
  },
  [types.HIDE_FOOT]:(state)=>{
    state.bFoot=false;
  },
  [types.SHOW_LOADING]:(state)=>{
    state.bLoading=true;
  },
  [types.HIDE_LOADING]:(state)=>{
    state.bLoading=false;
  },
  [types.USER_ID]:(state,payload)=>{
    state.userid=payload
  },
  [types.USER_NAME]:(state,payload)=>{
    state.username=payload
  },
  [types.LOGIN_OK]:(state,payload)=>{
    state.login=true
  },
  [types.LOGIN_NO]:(state,payload)=>{
    state.login=false
  },
  [types.CHANGE_BUYCAR]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.CLEAR_BUYCAR]:(state)=>{
    state.buycar=[];
  }
}
