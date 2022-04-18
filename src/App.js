import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashborad from './layouts/Dashborad';
import Navi from './layouts/Navi';


function App() {
  return (
    <div className="App">
      <Navi />
      <Dashborad></Dashborad>
    </div>
  );
}

export default App;
