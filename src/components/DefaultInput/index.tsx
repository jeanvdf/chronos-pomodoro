type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ labelText, id, type }: DefaultInputProps) {
  return (
    <>
      {labelText ? <label htmlFor={id}>{labelText}</label> : ''}
      <input id={id} type={type} placeholder='Digite seu nome...' />
    </>
  );
}
