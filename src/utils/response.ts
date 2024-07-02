export const createResponse = (status:string, message:string, data:any = []) => {
    if(data.length === 0){
        return { status, message }
    } else {
        return { status, message, data }
    }
}