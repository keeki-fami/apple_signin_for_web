const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000; //envファイルで設定も可

//httpメソッド：GETに対応
//app.use:ミドルウェア（httpリクエストのたびに呼び出される）を定義
app.use(express.static(path.join(__dirname,"public")));

//app.get("/",(req,res)=>{
//    res.send("hello,world!"); //=res.write()と類似
//})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})

