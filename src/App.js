import React from 'react';
import { Container } from 'react-bootstrap';
import SignupForm from './SignupForm';

const styles = {
  container: {
    marginTop: '40px'
  }
}

function App() {
  return (
    <Container style={styles.container}>
      <SignupForm />
    </Container>
  );
}

export default App;
