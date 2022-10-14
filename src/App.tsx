import { useState } from "react";
import styled from "styled-components";
import { Cards } from "./Data/Data";

const Styled = styled.div``;

const Wrapper = styled.div`
  display: flex;
  width: 40vw;
  border: 1px solid red;
  justify-content: space-around;
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftWrapper = styled.div`
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  height: 80vh;
  margin-left: 15px;
`;

const RightWrapper = styled.div`
  width: 45vw;
  border: 1px solid red;
  height: 60vh;
  margin-right: 15px;
`;

const Card = styled.div`
  width: 100px;
  height: 75px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PlayerScore = styled.p`
  padding: 15px;
`;

const Dropdown = styled.select`
  margin-left: 15px;
`;

const Button = styled.button`
  margin-right: 15px;
`;

// type Card = {
//   id: number;
//   title: string | number;
//   score: number;
// };

export default function App() {
  const [selectedScore, setSelectedScore] = useState({});

  function selectScore(id) {
    const findScore = Cards?.find((item) => id === item.id);
    setSelectedScore(findScore);
  }

  return (
    <Styled>
      <h1>Dev Poker</h1>
      <OuterWrapper>
        <LeftWrapper>
          {Cards.map((item) => (
            <Card {...item} key={item.id} onClick={() => selectScore(item.id)}>
              {item.title}
            </Card>
          ))}
        </LeftWrapper>
        <RightWrapper>
          <PlayerScore>{selectedScore && selectedScore.title}</PlayerScore>
          <Wrapper>
            <Dropdown>
              {Cards.map((card) => (
                <option key={card.id} card={card.title}>
                  {card.title}
                </option>
              ))}
            </Dropdown>
            <Button>Submit Score</Button>
          </Wrapper>
        </RightWrapper>
      </OuterWrapper>
    </Styled>
  );
}
