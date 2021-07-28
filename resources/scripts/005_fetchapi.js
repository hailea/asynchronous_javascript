const users = "https://jsonplaceholder.typicode.com/users";
const posts = "https://jsonplaceholder.typicode.com/posts";
const todos = "https://jsonplaceholder.typicode.com/todos";
fetch(posts).then(response=>{
    const oData = response.json();
    return oData;
}).then(data=>{
    console.log("Resolved Data 1: ", data);
}).catch(err=>{
console.log(err);
});

fetch(users).then(response=>{
    const oData = response.json();
    return oData;
}).then(data=>{
    console.log("Resolved Data 2: ", data);
}).catch(err=>{
console.log(err);
});

fetch(posts).then(response=>{
    const oData = response.json();
    return oData;
}).then(data=>{
    console.log("Resolved Data 3: ", data);
}).catch(err=>{
console.log(err);
});