const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

// * 'app.get' 함수를 이용해 서버 응답 출력
app.get("/api/host", (req, res) => {
  res.send({ host: "minjae" });
});

// * 'listen' 메소드를 이용해 서버 읽어옴
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
