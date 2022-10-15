import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Home : IOTA 코인 소개 페이지 
      - 로그인
      - 계정만들기
      로그인 되어 있나 확인,
      로그인 안되어 있으면, 로그인 페이지로 이동 
      로그인 되어 있으면 */}
      <div>
        <h1>IOTA Wallet</h1>
        <p>IOTA 지갑으로 계정, 니모닉 생성, 코인잔액 확인, 송금 가능</p>
        <hr />
        <Link to="/login">Login</Link>
        <hr />
        <Link to="/signup">Signup</Link>
        <hr />
        <h3>아래는 테스트 페이지</h3>
        <Link to="/account">Account</Link>
        <hr />
        <Link to="/send">Send</Link>
        <hr />
      </div>
    </main>
  );
};

export default Home;
