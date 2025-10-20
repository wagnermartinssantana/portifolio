import Header from './components/Header';
import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
      <Header />
      <Perfil />
      <main>
        <Projetos />
        <Experiencia />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}

export default App;
