import { createRef, useEffect, useState } from 'react';
import * as Styled from './styles';

type ErrorInput = {
  id: string;
  message: string;
}

export type InputProps = {
  inputType?: string;
  placeholder?: string;
  nameError?: string;
  descriptionError?: string;
};

export const Input = ({ inputType = 'text', placeholder, descriptionError }: InputProps) => {
  const [errorInput, setErrorInput] = useState<boolean>(false);
  const input = createRef<HTMLInputElement>();


  useEffect(()=> {
    input.current?.value && setErrorInput(false);
    !input.current?.value && setErrorInput(true);

    return () => {
      setErrorInput(false);
    }
  },[input])

  return (
    <Styled.Container>
    <input type={inputType} placeholder={placeholder} ref={input} />
      {
        errorInput && <span className='error-input'>{descriptionError}</span>
      }
    </Styled.Container>
  );
};
