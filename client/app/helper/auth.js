import axios from 'axios';

exports.getAllStudents = () => {
  return axios.get('api/students/getAll')
};

exports.getStudentByName = (name) => {
  return axios.get('api/students/name', {
    params: {
    name: name
    }
  })
};

exports.addStudent = (student) => {
  return axios({
    method: 'POST',
    url: 'api/students',
    data: student
  });
};

exports.getAllLogs = () => {
  return axios.get('api/logs/getAll')
};

exports.addLog = (log) => {
  return axios({
    method: 'POST',
    url: 'api/logs',
    data: log
  });
};