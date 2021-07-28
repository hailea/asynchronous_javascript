const getsomedata = (data)=>{
    return new Promise((resolve, reject)=>{
        const req = new XMLHttpRequest();
        req.addEventListener('readystatechange',()=>{
            if(req.readyState === 4 && req.status === 200){
                const jData = req.responseText;
                const oData = JSON.parse(jData);
                resolve(oData);
            } else if (req.readyState === 4){
                reject("Couldn't fetch data!!!");
            }

        });
        req.open('GET',data);
        req.send();
        
    });
}

const users = "https://jsonplaceholder.typicode.com/users";
const posts = "https://jsonplaceholder.typicode.com/posts";
const todos = "https://jsonplaceholder.typicode.com/todos";
//option 1
getsomedata(users)
.then(data=>{ 
    console.log("Promise 1 resolved: ", data);
})
.then(getsomedata(posts)
.then(data=>{ 
    console.log("Promise 2 resolved: ",data);
}))
.then(getsomedata(todos)
.then(data=>{ 
    console.log("Promise 3 resolved: ",data);
}))
.catch(err=>{ 
    console.log("Rejected Data: ",err); 
});

// //option 2 if there is an error in data 1, data 2 and data 3 doesnt work 
// getsomedata(users).then(data=>{
//     console.log("Promise 1 Resolved", data);
//     return getsomedata(posts);
// }).then(data =>{
//     console.log("Promise 2 Resolved", data);
//     return getsomedata(todos);
// }).then(data=>{
//     console.log("Promise 3 Resolved", data);
// }).catch(err=>{ 
//     console.log("Rejected Data: ",err); 
// });