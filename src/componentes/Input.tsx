import styled from 'styled-components';

interface InputProps {
  placeholder: string;
}

const StyledInput = styled.input<InputProps>`
  width: 85%;
  margin-top: 15px;
  /* margin-bottom: 15px; */
  background: transparent;
  padding: 15px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  height: 45px;
  border-bottom: 2px solid #D4D4D4;

  &[value="John Doe"] {
    border-color: blue;
  }
`;

const App = () => {
  return (
    <div className="input-container">
      <StyledInput placeholder="Email" />
      <StyledInput placeholder="Senha" />
    </div>
  );
};

export default App;