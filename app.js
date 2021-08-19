const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});


// // get the url
// var url = location.href;
// //getting the access token from url
// console.log(url, '<<url')

// var access_token = typeof url !== "undefined" && url.split("#")[1].split("=")[1].split("&")[0];
// // get the userid
// var userId = typeof url !== "undefined" && url.split("#")[1].split("=")[2].split("&")[0];
// console.log(access_token, 'access');
// console.log(userId, 'userId');



// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.fitbit.com/1/user/' + userId + '/activities/heart/date/today/1w.json');
// xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
// xhr.onload = function () {
//     if (xhr.status === 200) {
//         console.log(xhr.responseText)

//     }
// };

// xhr.send()
