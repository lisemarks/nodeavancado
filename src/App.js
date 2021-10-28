import './App.css';


import AppHeader from './components/AppHeader'
import Container from '@mui/material/Container';

import CreateCheckoutPage from './pages/CreateCheckoutPage'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Container component="main">
        <CreateCheckoutPage />
      </Container>
    </div>
  );
}

export default App;