import React from "react";
import { Form } from "../Form";
import { ResponseSection } from "../ResponseSection";
import { CardContainer, FormContainer } from "./style";

export const Card = (): JSX.Element => {
  return (
    <CardContainer>
      <FormContainer>
        <h1>Simule sua Antecipação</h1>
        <Form></Form>
      </FormContainer>
      <ResponseSection></ResponseSection>
    </CardContainer>
  );
};
