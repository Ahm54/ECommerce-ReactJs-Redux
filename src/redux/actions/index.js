export const addCart = (product) =>{
    return {
        type:"ADDITEM", 
        payload: product
    }
}
export const deleteCart = (product) =>{
    return {
        type:"DELCART", 
        payload: product
    }
}