import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListStudentComponent from "../component/ListStudentComponent";
import ViewStudentComponent from "../component/ViewStudentComponent";
import UpdateStudentComponent from "../component/UpdateStudentComponent";
import CreateStudentComponent from "../component/CreateStudentComponent";

export default function Nav() {
    return (
        <Router>
            <Routes>
                <Route path={"/students"} exact element={<ListStudentComponent/>}></Route>
                <Route path={"/students/detail/:id"} element={<ViewStudentComponent/>}></Route>
                <Route path={"/students/update/:id"} element={<UpdateStudentComponent/>}></Route>
                <Route path={"/students/create"} element={<CreateStudentComponent/>}></Route>
            </Routes>
        </Router>
    )
}