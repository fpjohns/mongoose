const Student = require("../models/Student.model.js");

module.exports.studentsController = {
  getStudent: (req, res) => {
    Student.find({}).then((data) => {
      res.json(data);
    });
  },
  createStudent: (req, res) => {
    const { name, phone, age } = req.body;
    Student.create({
      name,
      phone,
      age,
    }).then(() => {
      res.json("Студент добавлен");
    });
  },
  deleteStudentid: (req, res) => {
    Student.findByIdAndRemove(req.params.id).then(() =>
      res.json("студента нет(")
    );
  },
  patchStudentid: (req, res) => {
    
    Student.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.json('студент изменен')
  )},
};
