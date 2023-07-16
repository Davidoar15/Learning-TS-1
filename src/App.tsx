// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";
// Container fluid: Se ajusta al ancho
import "./App.css";
import { useStore } from "./hooks/useStore";
import { AUTO_LANGUAGE } from "./const";
import { LanguageSelector } from "./components/languageSelector";
import { SectionType } from "./types.d";
import { TextArea } from "./components/TextAre";

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col xs="auto">
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col>
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <svg
              focusable="false"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
            </svg>
          </Button>
        </Col>
        <Col xs="auto">
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type={SectionType.To}
              loading={loading}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
