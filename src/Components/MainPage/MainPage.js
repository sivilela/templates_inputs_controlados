import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";

function MainPage() {
  // 1. Declarar um estado para armazenar o valor do input
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //2. Adicionar a variável de estado no `**value**` do input
  const alterarNome = (event) => {
    setNome(event.target.value);
  };

  const alterarIdade = (event) => {
    setIdade(event.target.value);
  };

  // const imprimirValoresDosInputs = (event) => {
  //   event.preventDefault();
  //   console.log(nome, idade, estadoCivil);
  // };

  const limparInputs = () => {
    event.preventDefault();
    setNome("");
    setIdade("");
    setEstadoCivil("");
    setEmail("");
    setSenha("");
    alert("Dados enviados");
    console.log(limparInputs);
  };

  const alterarEmail = (event) => {
    setEmail(event.target.value);
  };

  const alterarSenha = (event) => {
    setSenha(event.target.value);
  };

  return (
    //3. Criar uma função de onChange
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <input value={nome} onChange={alterarNome} />
        </label>
        <label>
          Idade:
          <input value={idade} onChange={alterarIdade} />
        </label>

        <label>
          Estado Civil:
          <select
            value={estadoCivil}
            onChange={(event) => {
              setEstadoCivil(event.target.value);
            }}
          >
            <option>Nenhum</option>
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Viuvo</option>
          </select>
        </label>

        <label>
          Email:
          <input value={email} onChange={alterarEmail} />
        </label>

        <label>
          Senha:
          <input value={senha} onChange={alterarSenha} />
        </label>

        <button onClick={limparInputs}>Enviar dados</button>
      </Form>
    </MainContainer>
  );
}
export default MainPage;
