import './App.css';
import Question from './components/Question';
import SurveyChart from './components/SurveyChart';
import './index.css'

const App = () => {

  return (
    <div className="App">
      <SurveyChart />
      <Question />
    </div>
  )
}

export default App;
