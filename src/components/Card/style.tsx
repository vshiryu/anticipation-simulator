import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  min-width: 230px;
  padding: 20px;
  border-right: 1px solid grey;

  @media screen and (max-width: 467px) {
    border: none;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 300px;
  max-width: 90%;
  border: 1px solid grey;
  background-color: white;
  min-height: 300px;

  h1 {
    font-size: 1.5em;
    color: grey;
  }
`;
