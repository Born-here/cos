import './App.css';
import TestChoi from './pages/testSite/TestChoi';
import TestJoH from './pages/testSite/TestJoH';
import TestJoSJ from './pages/testSite/TestJoSJ';
import TestJoSK from './pages/testSite/TestJoSK';
import TestKang from './pages/testSite/TestKang';
import TestPaek from './pages/testSite/TestPaek';
import TestPark from './pages/testSite/TestPark';
import GlobalStyle from './styled/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <TestChoi />
      <TestJoH />
      <TestJoSJ />
      <TestJoSK />
      <TestKang />
      <TestPaek />
      <TestPark />
    </>
  );
}

export default App;
