import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import ListStudentComponent from "./component/ListStudentComponent";
import ViewStudentComponent from "./component/ViewStudentComponent";

function App() {
  return (
      <div>
        <Router>
            <Routes>
            <Route path = {"/students"} exact element={<ListStudentComponent/>}></Route>
            <Route path = {"/students/detail/:id"} element={<ViewStudentComponent/>}></Route>
            </Routes>
        </Router>
      </div>
  );
}

export default App;
