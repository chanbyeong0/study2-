// study2/index.js (기존 서버 파일)
const express = require("express");
const app = express();
const port = 3000;

// ... (기존 라우트 코드들) ...

// 헬스 체크 API 엔드포인트
app.get("/health", (req, res) => {
  // 응답할 상태 객체
  const healthStatus = {
    status: "UP",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(), // 서버가 실행된 시간 (초 단위)
  };

  // 추가적인 의존성 검사 (예: DB 연결)를 여기에 넣을 수 있습니다.

  // 모든 체크가 통과하면 200 OK와 함께 상태 반환
  res.status(200).json(healthStatus);
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
