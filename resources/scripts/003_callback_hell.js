//callback hell
const getDatas = (url, callback) => {
    const request = new XMLHttpRequest(); // Create an XMLHTTPRequest object
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const jData = request.responseText; //the response is JSON Data
            // console.log(jData);     
            const oData = JSON.parse(jData); //converts JSON data to JS object
            console.log(callback(undefined, oData));
            //console.log(oData);
            //console.log(oData[5].title);
        } else if (request.readyState === 4) {
            console.log(callback("404 Error: We couldn't find the data!!!", undefined));

        }
    });
    request.open('GET', url);
    request.send();
}
const posts = 'https://jsonplaceholder.typicode.com/posts';
const comments = 'https://jsonplaceholder.typicode.com/comments';
const todos = 'https://jsonplaceholder.typicode.com/todos';
const users = "https://jsonplaceholder.typicode.com/users";
//Getting posts from the server
getDatas(posts, (err, data) => {
    console.log("Callback function is fired!!")
    if (err) {
        console.log(err);

    } else {
        console.log(data);
        //Getting comments from the server
        getDatas(comments, (err, data) => {
            console.log("Callback function is fired!!")
            if (err) {
                console.log(err);

            } else {
                console.log(data);
                //Getting todos from the server
                getDatas(todos, (err, data) => {
                    console.log("Callback function is fired!!")
                    if (err) {
                        console.log(err);

                    } else {
                        console.log(data);
                        //Getting users from the server
                        getDatas(users, (err, data) => {
                            console.log("Callback function is fired!!")
                            if (err) {
                                console.log(err);

                            } else {
                                console.log(data);
                            }

                        });
                    }

                });

            }

        });

    }

});

