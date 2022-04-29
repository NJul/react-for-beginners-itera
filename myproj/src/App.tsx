import './App.css';
import { Footer } from './Footer';

const user = { userName: 'Vitalii' };

const App = () => (
  <div className='App'>
    <h1>Hello {user.userName}</h1>
    <Footer copyright='© 2022' />
  </div>
);

export default App;
