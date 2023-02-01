import { Box } from './components/Box';
import './App.css';

function App() {
  return (
    <div className="Container">
      <Box message = "hi" color = 'green'/>
      <Box message="hello" subHeading='Hey'/>
      <Box/>
    </div>
  );
}

export default App;
