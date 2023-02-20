import {useNavigate, useParams} from "react-router-dom";
import StudentService from "../service/StudentService";
import {Field, Form, Formik} from "formik";
import GetStudentById from "../service/GetStudentById";

export default function UpdateStudentComponent() {
    const param = useParams();
    const navigate = useNavigate();
    const [student] = GetStudentById(param)
    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                id: student.id,
                name: student.name,
                description: student.description,
                action: student.action
            }}
            onSubmit={(values) => {
                StudentService.updateStudentById(student.id, values)
                    .then(() => {
                        alert("Update Success")
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
                                        <Field name={'name'} placeholder="name"
                                               className="form-control">
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <Field name={'description'} placeholder="description"
                                               className="form-control" >
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label> Action: </label>
                                        <Field name={'action'} placeholder="action"
                                               className="form-control" >
                                        </Field>
                                    </div>
                                    <button className="btn btn-success">Update</button>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Formik>
    )
}