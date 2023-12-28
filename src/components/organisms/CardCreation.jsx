import React, { useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Button from "../atoms/Button";

import boards from "../../data/database";

const Styled = styled.div`
  color: ${(props) => props.theme.colors.text.dark};
  width: 650px;
  height: 750px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0% 15%;
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
    cursor: pointer;
  }

  textarea {
    font-size: 1rem;
    border-color: rgba(0, 0, 0, 0.1);
    color: #444;
    outline: none;
    border-radius: 3px;
  }

  .title {
    width: 100%;
    height: 40px;
    resize: none;
  }

  .children {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }

  .content {
    width: 100%;
    height: 80px;
    resize: none;
  }
`;

const CardCreation = ({ children, boardId, showCreationCard }) => {
  const [text, setText] = useState({
    key: "a3",
    title: "",
    content: "",
    background: "red",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const createCard = (event) => {
    boards[boardId - 1].cards.push(text);
    // alert("Card adicionado no board " + boards[boardId - 1].title);
    event.preventDefault();
    showCreationCard(false);
  };

  return (
    <Styled>
      <form action="">
        <label>Escolher cor do marcador</label>
        <input type="color" name="background" onChange={handleChange} />
        <label>Título</label>
        <textarea
          onChange={handleChange}
          autofocus
          className="title"
          name="title"
          id=""
          cols="1"
          rows="1"
        ></textarea>
        <label>Conteúdo</label>
        <textarea
          autofocus
          onChange={handleChange}
          className="content"
          name="content"
          id=""
          cols="1"
          rows="1"
        ></textarea>
        <label htmlFor="">Carregar imagem</label>
        <input type="file" onChange={handleChange} name="image" />
        <Button submit>
          <button onClick={createCard}>Adicionar</button>
        </Button>
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
