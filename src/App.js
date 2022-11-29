import './App.css';
import NavBar from "./components/NavBar"
import {Container, Row} from 'react-bootstrap'
import Footer   from "./components/Footer";

function App() {
  return (
      <div className="App">
        <>
          <NavBar/>
          <Container>
            <Row>
            </Row>
          </Container>
          <Footer />
        </>
      </div>
  );
}

export default App;
