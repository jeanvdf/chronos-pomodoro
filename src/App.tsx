import { HandMetal } from 'lucide-react';
import { Container } from './components/Container';
import { DefaultInput } from './components/DefaultInput';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Progress } from './components/Progress';

import './styles/global.css';
import './styles/theme.css';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber(prevState => prevState + 1);
    console.log(number);
  }

  return (
    <>
      <Heading> Number: {number}</Heading>
      <button onClick={handleClick}>Atualizar Nº</button>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <form className='form'>
          <div className='formRow'>
            <DefaultInput
              id='nomeInput'
              type='text'
              labelText='Nome'
              placeholder='Nome e sobrenome'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='telefoneInput'
              type='tel'
              labelText='Telefone'
              placeholder='( __ ) _____-____'
              maxLength={15}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='emailInput'
              type='email'
              labelText='Email'
              placeholder='Digite seu email...'
            />
          </div>
          <div>
            <DefaultButton icon={<HandMetal />} color='yellow' />
          </div>
        </form>
      </Container>
      <Container>
        <Progress percentage={100} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
