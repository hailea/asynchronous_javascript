// //async await throw new error
// const accessingData = async (url)=>{
//     const response = await fetch(url);
//     const data = response.json();
//     if(response.status !== 200){
//         throw new Error("Cannot Fetch Data. Check Your URL");
//     }
//     return data;

// }
// accessingData('/resources/data/posts.json').then((data)=>{
//     console.log(data);
// }).catch(err=>{
//     console.log("Error: ", err)
// })
// //async and await
// const accessingData = async (url)=>{
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;

// }
// try{
//     accessingData('/resources/data/posts.json').then(data=>{
//         console.log(data);
//     });
//     accessingData('/resources/data/users.json').then(data=>{
//         console.log(data);
//     });
//     accessingData('https://jsonplaceholder.typicode.com/todos').then(data=>{
//         console.log(data);
//     });
// }catch(e){
//     console.log("Error: ", e);
// }
// //async and await
// const fetchingData = async ()=>{
//     try{
//         const response = await fetch('/resources/data/posts.json');
//         const data = await response.json();
//         console.log(data);
//         const responseUsers = await fetch('/resources/data/users.json');
//         const dataUsers = await responseUsers.json();
//         console.log(dataUsers);
//         const responseTodos = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const dataTodos = await responseTodos.json();
//         console.log(dataTodos);
//     }catch(e){
//         console.log("Error:", e);

//     }

// }
// fetchingData();
// //The Fetch API
// fetch('/resources/data/ity.json')
// .then(resource => {   
// return resource.json();
// }).then(data=>{
//     console.log(data);
// })
// fetch('/resources/data/users.json')
// .then(resource => {   
// return resource.json();
// }).then(data=>{
//     console.log(data);
// })
// fetch('/resources/data/posts.json')
// .then(resource => {   
// return resource.json();
// }).then(data=>{
//     console.log(data);
// })
// .catch(err=>{
// console.log("Rejected: ", err)
// });
// //Promise
// const fetchingData = (url)=>{
//     const req = new XMLHttpRequest();
//     return new Promise((resolve,reject)=>{
//         req.addEventListener('readystatechange',()=>{
//             if(req.status === 200 && req.readyState === 4){
//                 const data = JSON.parse(req.responseText);
//                 resolve(data);        
//             }else if (req.readyState === 4){
//                 reject("Couldn't fetch the data!!!");
//             }
//         });
        
//         req.open("GET",url)
//         req.send();   

//     });
     
// }
// fetchingData('/resources/data/city.json')
// .then(data=>{
//     console.log("Promise Resolved 1: ", data);
//     return fetchingData('/resources/data/posts.json')
// }).then(data=>{
//        console.log("Promise Resolved 2: ", data)
//        return fetchingData('/resources/data/users.json')
// }).then(data=>{
//         console.log("Promise Resolved 3: ", data)
// }).catch(err=>{
//     console.log("Promise is Rejected: ", err);
// });

// const getData = ()=>{
//     return new Promise((resolve,reject)=>{
//         //resolve("Some Data!!");
//         reject("Some Errors!!");
//     });
// }
// //option 1
// // getData().then((data)=>{
// // console.log(data);
// // },(err)=>{
// //     console.log(err);
// // });
// //option2
// getData().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// //HTTP Requests By using XMLHttpRequest() object
// const getTodos = (url, callBackState)=>{
//     const req = new XMLHttpRequest();
//     req.addEventListener('readystatechange', ()=>{  
        
//     if(req.readyState === 4 && req.status === 200){
//         const data = JSON.parse(req.responseText);
//          callBackState(undefined, data);   
//      }
//      else if(req.readyState === 4){
//          callBackState("Couldn't Fetch Data", undefined);
      
//      }
//   });
//     req.open('GET', url);
//     req.send();  
// }  
// getTodos('../resources/data/posts.json',(err,data)=>{
//     console.log(data);
//     getTodos('../resources/data/users.json',(err,data)=>{
//         console.log(data);
//         getTodos('../resources/data/city.json',(err,data)=>{
//             console.log(data);
//         });
//     });   
// });

// //HTTP Request By using XMLHttpRequest() object
// const url = '../resources/data/posts.json';
// const getTodos = (callBackState,urlS)=>{
//     const req = new XMLHttpRequest();
//     function dataFetch(){
//         if(this.readyState === 4 && this.status === 200){
//             const data = JSON.parse(this.responseText)
//             callBackState(undefined,data);   
//         }
//         else if(this.readyState === 4){
//             callBackState("Couldn't Fetch Data", undefined);
            
//         }
//      }
//      req.addEventListener('readystatechange', dataFetch);
//     req.open('GET', urlS);
//     req.send();    
// }
// const urlState = (err, data)=>{
//     console.log("Callback Fired");
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// }
// getTodos(urlState,url);
