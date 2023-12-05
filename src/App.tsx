import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';

import './styles/global.css';

function App() {
   return (
      <BrowserRouter>
         <Routers />
      </BrowserRouter>
   );
}

export default App;
