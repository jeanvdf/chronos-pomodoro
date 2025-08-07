import { Container } from '../../components/Container';
import { MainTemplate } from '../../template/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Pagina não Encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          corporis porro est magnam temporibus, quaerat, quia saepe sit
          sapiente, consequatur sequi quasi numquam nam quas aspernatur minima
          nemo dolorem similique.
        </p>
      </Container>
    </MainTemplate>
  );
}
