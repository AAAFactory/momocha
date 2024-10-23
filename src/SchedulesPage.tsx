import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8em;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.25em;
  }
`;

const Schedule = styled(Link)`
    padding: 1.7em 1.1em;
    background: #fff;
    border: 1px solid #000;
    text-decoration: none;
    cursor: pointer;
    color: #000;
`;

export default function SchedulesPage() {
  return (
    <Container>
      <h1>수업목록</h1>
      <ul>
        <Schedule to="/schedule">
          화요일 18시 - 중등부
        </Schedule>
        <Schedule to="/schedule">
          화요일 18시 - 고등부
        </Schedule>
        <Schedule to="/schedule">
          목요일 18시 - 중등부
        </Schedule>
        <Schedule to="/schedule">
          목요일 18시 - 고등부
        </Schedule>
      </ul>
    </Container>
  );
}
