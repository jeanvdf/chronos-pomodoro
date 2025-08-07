import { Container } from '../../components/Container';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../template/MainTemplate';

export function Cardapio() {
  return (
    <MainTemplate>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
