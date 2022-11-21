import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-evenly;

  button {
    width: 140px;
    margin-left: 5%;
    background-color: aliceblue;
    border: 1px solid grey;
    padding: 5px;
    border-radius: 2px;
  }

  input {
    max-width: 250px;
  }
`;
