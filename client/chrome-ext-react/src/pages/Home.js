import { Link } from "react-router-dom";
import { Button, Container, Stack } from "@mui/material";
import { useRecoilState } from "recoil";
import { passwordState, usernameState } from "../utils/account_state";

const Home = () => {
  const [gusername, setGusername] = useRecoilState(usernameState);
  const [gpassword, setGpassword] = useRecoilState(passwordState);
  return (
    <Container>
      <Stack spacing={2}>
        <h1>IOTA Wallet</h1>
        <p>
          아이오타는 사물인터넷 (IOT), M2M 애플리케이션을 위한 암호화폐로써 이는
          블록체인이 아닌, 탱글 알고리즘 기반으로 개발되어 블록도 체인도 없이
          ‘탱글’이란 알고리즘 기반으로 개발된 코인이다.
        </p>
        <p>
          IOTA 지갑으로 계정, 니모닉 생성, 코인잔액 확인, 송금이 가능합니다.
        </p>
        {!gusername && !gpassword ? (
          <>
            <Button variant="contained">
              <Link to="/login">Login</Link>
            </Button>

            <Button variant="contained">
              <Link to="/signup">Signup</Link>
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained">
              <Link to="/account">Account</Link>
            </Button>

            <Button variant="contained">
              <Link to="/send">Send</Link>
            </Button>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Home;
