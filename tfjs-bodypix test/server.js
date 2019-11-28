const express = require('express');


var fs = require('fs');

const app = express();
const PORT = process.env.PORT = 3000;

app.use(express.static('public'));

// app.get('/', (req, res) => { res.send('index page') })
app.get('/test', (req, res) => { res.send('test page') })

app.get('/', function(req, res){
    fs.readFile('bodytest.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});




//server 내 imgs 경로에 사진 업로드
//이미지 바꾸고 싶으면 파일명 (third.jpg) 변경
//해당이미지는 프로젝트 폴더 내에 위치해야 함
app.get('/imgs', function(req, res){
    fs.readFile('WIN_20191126_22_24_52_Pro.jpg', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});



    


app.listen(PORT, () => {
  console.log('Server on SUMIN:',PORT);
});
