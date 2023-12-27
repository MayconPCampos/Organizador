import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Styled = styled.div`
  color: ${(props) => props.theme.colors.text.dark};
  width: 650px;
  height: 550px;
  background-color: #fff;
  border-radius: 5px;
  margin: 2% 20%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 50px;
  z-index: 1;

  label {
    display: block;
    font-size: 1.1rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 2px;
    background-color: #fff;
  }

  textarea {
    font-size: 1rem;
    border-color: rgba(0, 0, 0, 0.1);
    color: #444;
    outline: none;
    border-radius: 3px;
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
        <label>Escolher cor do marcador</label>
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
