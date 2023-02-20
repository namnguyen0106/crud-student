import {useEffect, useState} from "react";
import StudentService from "./StudentService";

export default function GetStudentById(param) {
    const [student, setStudent] = useState({
        id: "",
        name: "",
        description: "",
        action: ""
    });
    useEffect(() => {
        const setDataForStudent = async () => {
            StudentService.getStudentById(param.id).then(res => {
                setStudent(res.data);
            })
        }
        setDataForStudent().catch(console.error);
    }, [])

    return [student, setStudent];
}