export const currency=(data,currency='￥',digit=2)=>{
    return currency+data.toFixed(digit);
}