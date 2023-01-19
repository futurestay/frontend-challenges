import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import ParserExercise from './parser-exercise/parser-exercise';
import ProgressBarExercise    from './progress-bar-exercise/progress-bar-exercise';
import './app.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="layout-container">
          <div className="exercise-index">
            <h2 className="title">Exercises</h2>
            <ul className="exercise-links">
<li>
                <NavLink exact={true} to="/progress_bar">
                  Progress Bar
                </NavLink>
              </li>
              <li>
                <NavLink exact={true} to="/parser">
                  Parser
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="exercise-show">
            <Routes>
              <Route path="/progress_bar" element={<ProgressBarExercise />} />
              <Route path="/parser" element={<ParserExercise />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
  };

export default App;
