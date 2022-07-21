import axios from 'axios';


//モジュールのインポート
const http = require('http');
const express = require('express');

//expressオブジェクトの生成
const app = express();

//getでリクエスト時に処理するコールバック関数指定
app.get("/", function (req, res) {

    const result = axios.get('http://localhost/login/google')


    return res.send(result);
});


//サーバの設定
const server = http.createServer(app);
server.listen(3000);