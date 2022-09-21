// let users = [
//     {
//         name:"Orxan",
//         surname:"Akberov",
//         age:26
//     },
//     {
//         name:"Ramil",
//         surname:"Binnetov",
//         age:20
//     },
//     {
//         name:"Cavidan ",
//         surname:"Qedirli",
//         age:18
//     },
//     {
//         name:"Haqverdi",
//         surname:"Mustafayev",
//         age:26
//     }
// ]

// let ul = document.querySelector(".list-group")

// function getUsers(){
//     setTimeout(() => {

//         let elem = "";
//         users.forEach(user=>{
//             elem +=`  <li class="list-group-item">
//             <b>${user.name}</b>
//             <b>${user.surname}</b>
//             <b>${user.age}</b>
//             </li>`
//         })

//         ul.innerHTML = elem;

//     }, 2000);
// }

// getUsers()

// function createUser(user,callback){
//     setTimeout(() => {
//         users.push(user);
//         callback();
//     }, 3000);

// }

// createUser({name:"Emil",surname:"Abdullayev",age:20},getUsers);

// function getUsers(){
//     setTimeout(() => {

//         let elem = "";
//         users.forEach(user=>{
//             elem +=`  <li class="list-group-item">
//             <b>${user.name}</b>
//             <b>${user.surname}</b>
//             <b>${user.age}</b>
//             </li>`
//         })

//         ul.innerHTML = elem;

//     },2000);
// }

// function createUser(user){

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             users.push(user);

//             let err = false;
//             if(!err){
//                 resolve(users);
//             }else{
//                 reject("something is wrong");
//             }
//         },3000);
//     })
// }

// createUser({name:"Emil",surname:"Abdullayev",age:20}).then(response=>{
//     getUsers();
// }).catch(error=>{
//     console.log(error);
// })

// let ul = document.querySelector(".list-group")
// let btn = document.querySelector(".get-datas")

// btn.addEventListener("click", function () {
//     getPosts();
// });

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))

// async function getPosts() {
//     const posts = await fetch("https://jsonplaceholder.typicode.com/posts")

//     let result = await posts.json()

//     let elem = "";

//     result.forEach(post => {
//         elem += `<li style="border:1px solid red; margin-top:10px"  class="list-group-item">
//             <p>${post.userId}</p>
//             <p>${post.id}</p>
//             <p>${post.title}</p>
//             <p>${post.body}</p>
//             </li>`
//     })

//     ul.innerHTML = elem;
// }
// getPosts()


let addBtn = document.querySelector(".btn-add");

let dltBtn = document.querySelector(".btn-delete");

let table = document.querySelector(".table1");

async function getPost() {
    let posts = await fetch("https://jsonplaceholder.typicode.com/comments");
    let result = await posts.json();

    result.forEach((element) => {
        table.innerHTML += `<td>${element.postId}</td>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.body}</td>
    <td>${element.clean}</td>
    `;
    });
}

function deleteBtn() {
    table.innerHTML = "";
}

addBtn.addEventListener("click", function () {
    getPost();
});

dltBtn.addEventListener("click", function () {
    deleteBtn();
});