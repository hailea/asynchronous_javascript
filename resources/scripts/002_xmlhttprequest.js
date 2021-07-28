
// //Retrieveing data from the server
// const request  = new XMLHttpRequest(); // Create an XMLHTTPRequest object
// const url = 'https://jsonplaceholder.typicode.com/todos';
// request.addEventListener('readystatechange',()=>{
//     if(request.readyState === 4 && request.status === 200){
//         const jData = request.responseText; //the response is JSON Data
//        // console.log(jData);     
//         const oData = JSON.parse(jData); //converts JSON data to JS object
//         console.log(oData);
//         //console.log(oData[5].title);
//     } else if (request.readyState === 4){
//         console.log("404 Error: We couldn't find the data!!!");
//     } 
// });
// request.open('GET',url);
// request.send();

//Retrieveing data from the server and make it reusable
const getPosts = (callback)=>{
    const request  = new XMLHttpRequest(); // Create an XMLHTTPRequest object
    const url = 'https://jsonplaceholder.typicode.com/posts';
    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            const jData = request.responseText; //the response is JSON Data
           // console.log(jData);     
            const oData = JSON.parse(jData); //converts JSON data to JS object
            console.log(callback(undefined, oData));
            //console.log(oData);
            //console.log(oData[5].title);
        } else if (request.readyState === 4){
            console.log(callback("404 Error: We couldn't find the data!!!", undefined));
            
        } 
    });
    request.open('GET',url);
    request.send();    
}

getPosts((err, data)=>{
    console.log("Callback function is fired!!!")
    if(err){
        console.log(err);

    }else{
        console.log(data);
    }
    
});

