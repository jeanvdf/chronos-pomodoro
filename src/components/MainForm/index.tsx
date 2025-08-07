import { HandMetal } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
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
  );
}
