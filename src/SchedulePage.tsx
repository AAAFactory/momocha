import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import passengers from './data/passengers';

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
          {passengers.map((passenger) => (
            <li>
              <div>
                <h2>{passenger.name}</h2>
                <p>{passenger.location}</p>
              </div>
              <div>
                <button type="button">삭제</button>
                <button type="button" onClick={handleClickLocation}>위치보기</button>
              </div>
            </li>
          ))}
        </Passengers>
        <OptimizeRoute onClick={handleClick}>
          최적 경로 찾기
        </OptimizeRoute>
      </div>
    </Container>
  );
}
