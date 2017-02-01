import axios from 'axios';


exports.getAllStudents = () => {
  return axios.get('http://localhost:3000/api/students')
};

exports.getStudentByName = (name) => {
  return axios.get('http://localhost:3000/api/students/name', {
    params: {
      name: name
    }
  })
};

exports.addStudent = (student) => {
return axios({
  method: 'POST',
  url: 'http://localhost:3000/api/students',
  data: student
});
};

