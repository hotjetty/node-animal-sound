const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/dog', (req, res) => {
    res.send('<a href="https://naver.com">네이버</a><br><h1>강아지</h1>')
})
app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    if(name == "dog") {
        res.json({'sound': '멍멍'})
    } else if(name == "cat") {
        res.json({'sound': '야옹'})
    } else if(name == "pig") {
        res.json({'sound': '꿀꿀'}) 
    } else {
        res.json({'sound': '알수없음'})
    }
    // console.log(name)

    // res.json({'sound': '야옹'})
})
app.get('/user/:id', (req, res) => {
    // const p = req.params
    // console.log(p.id)
    // const q = req.query
    // console.log(q.q)
    // console.log(q.name)
    // console.log(q.age)

    // res.json({'userid':q.name}) ->  여기까지가 get함수를 사용한것(주소창 존재)/post함수는 주소창 존재X
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
}) 