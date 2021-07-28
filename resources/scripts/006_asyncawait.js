
const getDatas = async (users)=>{
    const resource = await fetch(users);
    if(resource.status !== 200){
        throw new Error ("Couldn't find the file");
    }
    const data = await resource.json();
    return data;

}
const pData = "https://jsonplaceholder.typicode.com/posts";

getDatas(pData).then(data=>{
    console.log("Resolved: ",data);
})
.catch((err)=>{
    console.log("Rejected: ", err.message);
});