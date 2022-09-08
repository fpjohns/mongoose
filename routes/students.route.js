const { Router } = require("express");

const { studentsController } = require("../controllers/students.controller.js");

const router = Router();

router.get("/students", studentsController.getStudent);
router.post("/students", studentsController.createStudent);
router.delete("/students/:id", studentsController.deleteStudentid);
router.patch("/students/:id", studentsController.patchStudentid);

module.exports = router;
