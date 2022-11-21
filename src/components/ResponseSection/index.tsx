import React, { useContext, useEffect } from "react";
import { ResponseContext } from "../../Providers/Response";
import { Container } from "./style";

export const ResponseSection = (): JSX.Element => {
  const { responseData } = useContext(ResponseContext);

  return (
    <Container>
      <h2>VOCÊ RECEBERÁ</h2>
      <span>Amanhã: R${responseData[1]}</span>
      <span>Em 15 dias: R${responseData[15]}</span>
      <span>Em 30 dias: R${responseData[30]}</span>
      <span>Em 90 dias: R${responseData[90]}</span>
    </Container>
  );
};
