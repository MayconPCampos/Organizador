import React from "react";
import Title from "../components/atoms/Title";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
`;

export default {
  title: "Seja bem vindo(a)",
};

export const Apresentacao = {
  render: () => (
    <>
      <Container>
        <Title>
          <h1>Kapple web app</h1>
          <p>Este projeto está em início de desenvolvimento.</p>
          <p>
            Você pode acessar uma versão para testes publicada no seguinte{" "}
            <a href="#" target="_blank">
              {" "}
              Link
            </a>
          </p>
        </Title>
      </Container>
    </>
  ),
};
