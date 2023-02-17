import axios from "axios";

const BASE_URL = "http://localhost:3000/students";

class StudentService {
    getStudents() {
        return axios.get(BASE_URL);
    }

    createStudent(student) {
        return axios.post(BASE_URL, student);
    }

    getStudentById(id) {
        return axios.get(BASE_URL + "/" + id);
    }

    deleteStudentById(id) {
        return axios.delete(BASE_URL + "/" + id);
    }

    updateStudentById(id, student) {
        return axios.put(BASE_URL + "/" + id, student);
    }
}

export default new StudentService()