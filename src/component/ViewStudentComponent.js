import StudentService from '../service/StudentService'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function ViewStudentComponent() {
    const [student, setStudent] = useState({
        id: "",
        name: "",
        description: "",
        action: ""
    });
    const param = useParams();
    useEffect(() => {
        const setDataForStudent = async () => {
            StudentService.getStudentById(param.id).then(res => {
                setStudent(res.data);
            })
        }
        setDataForStudent().catch(console.error);
    }, [])

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> Student Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Student id: </label>
                        <div> {student.id}</div>
                    </div>
                    <div className="row">
                        <label> Student name: </label>
                        <div> {student.name}</div>
                    </div>
                    <div className="row">
                        <label> Student description: </label>
                        <div> {student.description}</div>
                    </div>
                    <div className="row">
                        <label> Student action: </label>
                        <div> {student.action}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
