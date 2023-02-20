import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import ListStudentComponent from "./component/ListStudentComponent";
import ViewStudentComponent from "./component/ViewStudentComponent";
import CreateStudentComponent from "./component/CreateStudentComponent";
import UpdateStudentComponent from "./component/UpdateStudentComponent";

function App() {
  return (
      <div>
        <Router>
            <Routes>
            <Route path = {"/students"} exact element={<ListStudentComponent/>}></Route>
            <Route path = {"/students/detail/:id"} element={<ViewStudentComponent/>}></Route>
            <Route path = {"/students/update/:id"} element={<UpdateStudentComponent/>}></Route>
            <Route path = {"/students/create"} element={<CreateStudentComponent/>}></Route>
            </Routes>
        </Router>
      </div>
  );
}

export default App;
