import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-color: #003566;
  color: #ffc300;
}
button{
  width: 60px;
  heigth: 60px;
  background-color: #40916c;
  color: white;
  border: none;
  margin: 10px;
  text-align: center;
  border-radius: 50%;
}
`;
const Envolvente = styled.div`
  width: 70vw;
  heigth: 70vh;
  margin-top: 15vh;
  padding-top: 3vh;
`;
const Recebdados = styled.input`
  margin-top: 7px;
  margin-left: 7px;
  ::placeholder {
    font-style: bold;
    font-size: 1.2rem;
    font-style: italic;
  }
  :focus-within {
    color: #fbff12;
    background-color: #001524;
    border: none;
  }
`;
const Operacoes = styled.section`
  filter: drop-shadow(10px 10px 7px #000);
`;
const Result = styled.section`
  margin-top: 5vh;
  filter: drop-shadow(10px 15px 0px #000);
`;

export default class calc extends React.Component {
  state = {
    n1: "",
    n2: "",
    res: "O resultado aparecerá aqui."
  };
  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };
  handleChange2 = (event) => {
    this.setState({ n2: Number(event.target.value) });
  };
  add = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: n1 + n2 });
  };
  sub = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: n1 - n2 });
  };
  mult = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: n1 * n2 });
  };
  div = () => {
    const { n1, n2 } = this.state;
    this.setState({ res: n1 / n2 });
  };
  clean = () => {
    this.setState({
      n1: "",
      n2: "",
      res: "O resultado aparecerá aqui."
    });
  };
  render() {
    return (
      <Envolvente>
        <GlobalStyle />
        <h1>Calculadora básica</h1>

        <Recebdados
          placeholder="digite os valores"
          onChange={this.handleChange1}
          value={this.state.n1}
        />
        <Recebdados
          placeholder="digite os valores"
          onChange={this.handleChange2}
          value={this.state.n2}
        />

        <Operacoes>
          <button onClick={this.add}>+</button>
          <button onClick={this.sub}>-</button>
          <Operacoes>
            <button onClick={this.mult}>*</button>
            <button onClick={this.div}>/</button>
            <button onClick={this.clean}>Limpar</button>
          </Operacoes>
        </Operacoes>

        <Result>
          <h2>{this.state.res}</h2>
        </Result>
      </Envolvente>
    );
  }
}
