import {fillzero} from "./fillzero";

export const date=(time)=>{
    let d=new Date();
    d.setTime(time);
    // return `${d.getFullYear()}年${fillzero(d.getMonth()+1)}月${fillzero(d.getDate())}日 ${fillzero(d.getHours())}时${fillzero(d.getMinutes())}分${fillzero(d.getSeconds())}秒`;
    return `${fillzero(d.getMonth()+1)}-${fillzero(d.getDate())} ${fillzero(d.getHours())}:${fillzero(d.getMinutes())}:${fillzero(d.getSeconds())}`;
}