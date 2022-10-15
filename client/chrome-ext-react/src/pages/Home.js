import { Link } from "react-router-dom";
import { Button, Container, Stack } from "@mui/material";
const Home = () => {
  return (
    <Container>
      {/* Home : IOTA 코인 소개 페이지 
      - 로그인
      - 계정만들기
      로그인 되어 있나 확인,
      로그인 안되어 있으면, 로그인 페이지로 이동 
      로그인 되어 있으면 */}
      <Stack spacing={2}>
        <h1>IOTA Wallet</h1>
        <p>IOTA 지갑으로 계정, 니모닉 생성, 코인잔액 확인, 송금 가능</p>

        <Button variant="contained">
          <Link to="/login">Login</Link>
        </Button>

        <Button variant="contained">
          <Link to="/signup">Signup</Link>
        </Button>
        <hr />
        <h3>아래는 테스트 페이지</h3>
        <Button variant="contained">
          <Link to="/account">Account</Link>
        </Button>

        <Button variant="contained">
          <Link to="/send">Send</Link>
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
