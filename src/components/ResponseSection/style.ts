import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  width: 45%;
  padding: 20px;
  background-color: rgb(213, 218, 235);
  font-style: italic;

  span {
    margin: 15px 0;
  }

  h2 {
    font-size: 1.2em;
    color: lightskyblue;
  }

  @media screen and (max-width: 467px) {
    width: 100%;
    align-items: center;
  }
`;
