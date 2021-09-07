export const AddItem = (num)=>{
    return{
        type: "AddItem",
        payload :num
    }
}
export const DeleteItem = (num)=>{
    return{
        type: "DeleteItem",
        payload :num
    }
}
export const DeleteAllItem = (num)=>{
    return{
        type: "DeleteAllItem",
        payload :num
    }
}