// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";
import axios from 'axios';

// https://sapper-blog-app.vercel.app/blog/axios#%E5%85%B1%E9%80%9A%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B

axios.defaults.withCredentials = true;

// sub.jsに定義されたJavaScriptを実行する。
// hello();

// let xsrf_token;

axios.get('http://localhost/sanctum/csrf-cookie')
    .then(function (response) {
        console.log(response.config.headers['X-XSRF-TOKEN']);
    })
    .catch(function (error) {
        console.log(error);
    });

function getXsrfTokenFromCookie() {
    const cookies = document.cookie;
    const cookie_array = cookies.split(';');

    for (let cookie of cookie_array) {
        let { key, value } = cookie.split('=')[0];

        if (key === 'XSRF-TOKEN') {
            alert(value);
            return value;
        }
    }
}

getXsrfTokenFromCookie();



// alert(xsrf_token);

// function sanctum(func) {
//     let xsrf_token = getXsrfTokenFromCookie();

//     if (!xsrf_token) {
//         axios.get('http://localhost/sanctum/csrf-cookie')
//             .then(function (response) {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }


//     return function (xsrf_token) {

//     }
// }




// axios.interceptors.request.use((config) => {
//     config.headers = { 'X-XSRF-TOKEN': token } // todo: ここでトークンを付与する
//     return config
// })

// axios.interceptors.response.use(response => {
//     console.log(response.url)
//     return response
// })

// axios.post('http://localhost/login/google')
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

