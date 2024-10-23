import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  input {
    margin-bottom: 1.6em;
    font-size: 1.25em;
    width: 100%;
    display: block;
    padding: 1em;
  }
`;

const Passengers = styled.ul`
  margin-top: 1.5em;

  display: flex;
  flex-direction: column;
  gap: 1.75em;

  li {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.5em;
      font-weight: 700;
    }

    button {
      display: block;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    justify-content: space-between;
  }
`;

const OptimizeRoute = styled.button`
  margin-top: 2em;
  width: 100%;
  padding: 0.75em;
  font-size: 1.75em;
  font-weight: 700;
  cursor: pointer;
  background: #fff;
`;

export default function SchedulePage() {
  const navigate = useNavigate();

  const handleClickLocation = () => {
    navigate('/location');
  };

  const handleClick = () => {
    navigate('/route');
  };

  return (
    <Container>
      <input type="text" placeholder="회원을 검색하세요." />
      <div>
        <h1>
          탑승자 목록
        </h1>
        <Passengers>
          <li>
            <div>
              <h2>김덕수</h2>
              <p>관악구 신림동 251-466 하나로마트 앞</p>
            </div>
            <div>
              <button type="button">삭제</button>
              <button type="button" onClick={handleClickLocation}>위치보기</button>
            </div>
          </li>
          <li>
            <div>
              <h2>유경수</h2>
              <p>관악구 신림동 231-198 농협 앞</p>
            </div>
            <div>
              <button type="button">삭제</button>
              <button type="button" onClick={handleClickLocation}>위치보기</button>
            </div>
          </li>
          <li>
            <div>
              <h2>박하나</h2>
              <p>관악구 신림동 하나아파트 301동 앞</p>
            </div>
            <div>
              <button type="button">삭제</button>
              <button type="button" onClick={handleClickLocation}>위치보기</button>
            </div>
          </li>
          <li>
            <div>
              <h2>주현영</h2>
              <p>관악구 봉천동 경원빌라 101동</p>
            </div>
            <div>
              <button type="button">삭제</button>
              <button type="button" onClick={handleClickLocation}>위치보기</button>
            </div>
          </li>
        </Passengers>
        <OptimizeRoute onClick={handleClick}>
          최적 경로 찾기
        </OptimizeRoute>
      </div>
    </Container>
  );
}
