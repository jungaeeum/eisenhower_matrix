const compression = require("compression");
const cors = require("cors");
const { indexRouter } = require("./src/router/indexRouter");
const { userRouter } = require("./src/router/userRouter");

const express = require("express");
const app = express();
const port = 3000;

/* express 미들웨어 설정 */
console.log(1);

// 정적파일 제공
app.use(express.static("서비스 완성"));

//cors 설정
app.use(cors());

// body json 파싱
app.use(express.json());

// HTTP 요청 압축
app.use(compression());

// app.post("/user", function (req, res) {
//   const name = req.body.name
//   return res.send(name);
// });

// 라우터 분리
indexRouter(app); //indexRouter.js 에서 가리키는 express 객체
userRouter(app);

app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`);
});
