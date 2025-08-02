import { ChevronRight } from 'lucide-react';
import { Container } from './components/Container';
import { DefaultButton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Progress } from './components/Progress';

import './styles/global.css';
import './styles/theme.css';

export default function App() {
  return (
    <>
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
            <DefaultButton icon={<ChevronRight />} />
            <button type='submit'>Limpar</button>
          </div>
          <div className='formRow'>
            <Progress percentage={100} />
          </div>
        </form>
      </Container>
    </>
  );
}
