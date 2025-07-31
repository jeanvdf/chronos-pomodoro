import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

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
            <label htmlFor='meuInput'>Nome</label>
            <input id='meuInput' type='text' placeholder='Digite seu nome...' />
          </div>
          <div className='formRow'>
            <label htmlFor='meuInput2'>Telefone</label>
            <input
              id='meuInput2'
              type='text'
              placeholder='Digite seu telefone...'
            />
          </div>
          <div className='formRow'>
            <label htmlFor='meuInput3'>Email</label>
            <input
              id='meuInput3'
              type='text'
              placeholder='Digite seu email...'
            />
          </div>
          <div>
            <button type='submit'>Proximo</button>
            <button type='submit'>Limpar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
