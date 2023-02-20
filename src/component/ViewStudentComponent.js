import StudentService from '../service/StudentService'
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import GetStudentById from "../service/GetStudentById";

export default function ViewStudentComponent() {
    const param = useParams();
    const [student] = GetStudentById(param)

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
