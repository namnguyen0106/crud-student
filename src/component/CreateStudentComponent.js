import {Field, Form, Formik} from "formik";
import StudentService from "../service/StudentService";
import {useNavigate} from "react-router-dom";

export default function CreateStudentComponent() {
    const navigate = new useNavigate()
    return (
        <Formik
            initialValues={{
                id: '',
                name: '',
                description: '',
                action: ''
            }}
            onSubmit={(values) => {
                StudentService.createStudent(values)
                    .then(() => {
                        alert("Success")
                        return navigate("/students")
                    })
            }}
        >
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            Create student
                            <div className="card-body">
                                <Form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <Field name={'name'} placeholder="name" className="form-control"></Field>
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <Field name={'description'} placeholder="description"
                                               className="form-control"></Field>
                                    </div>
                                    <div className="form-group">
                                        <label> Action: </label>
                                        <Field name={'action'} placeholder="action" className="form-control"></Field>
                                    </div>
                                    <button className="btn btn-success">Save</button>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Formik>
    )
}