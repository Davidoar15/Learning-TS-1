// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
// Container fluid: Se ajusta al ancho
import './App.css';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './const';
import { LanguageSelector } from './components/languageSelector';

function App() {

  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore() 

  return (
    <Container fluid> 
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <LanguageSelector type="from" value={fromLanguage} onChange={setFromLanguage}/>
          {fromLanguage}
        </Col>
        <Col>
          <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <svg focusable="false" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></svg>
          </Button>
        </Col>
        <Col>
        <LanguageSelector type="to" value={toLanguage} onChange={setToLanguage}/>
        {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
