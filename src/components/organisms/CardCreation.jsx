import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Styled = styled.div`
  width: 650px;
  height: 550px;
  background-color: #fff;
  border-radius: 5px;
  margin: 2% 20%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 50px;

  label {
    display: block;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .description {
    width: 100%;
    height: 40px;
    resize: none;
  }

  .children {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }

  .commentary {
    width: 100%;
    height: 80px;
    resize: none;
  }
`;

const CardCreation = ({ children }) => {
  return (
    <Styled>
      <form action="">
        <label>Marcador</label>
        <input type="color" />
        <label>Descrição</label>
        <textarea
          autofocus
          className="description"
          name=""
          id=""
          cols="1"
          rows="1"
        ></textarea>
        <label>Adicionar comentário</label>
        <textarea
          autofocus
          className="commentary"
          name=""
          id=""
          cols="1"
          rows="1"
        ></textarea>
        <label htmlFor="">Carregar imagem</label>
        <input type="file" />
      </form>
      <div className="children">{children}</div>
    </Styled>
  );
};

CardCreation.defaultProps = {
  children: undefined,
};

CardCreation.propTypes = {
  children: propTypes.node,
};

export default CardCreation;
