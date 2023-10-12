let { lessons, idLesson, instructors } = require("../db");

const createClasses = (req, res) => {
  const { idInstructor } = req.params;
  const { title, description } = req.body;

  const instructorFind = instructors.find((instructor) => {
    return instructor.id === Number(idInstructor);
  });

  if (!instructorFind) {
    return res.status(404).json({ message: "O instrutor não existe" });
  }

  if (!title) {
    return res.status(400).json({ message: "É necessário um título da aula" });
  }

  if (!description) {
    return res
      .status(400)
      .json({ message: "É necessária a descrição da aula" });
  }

  const lesson = {
    id: idLesson++,
    instructor_id: Number(idInstructor),
    title,
    description,
  };

  lessons.push(lesson);

  return res.status(201).json(lesson);
};

const getAllClasses = (req, res) => {
  return res.status(200).json(lessons);
};

const getClassData = (req, res) => {
  const { id } = req.params;

  const lessonFind = lessons.find((lesson) => lesson.id === Number(id));

  if (!lessonFind) {
    return res.status(404).json({ message: "Aula não existe" });
  }

  return res.status(200).json(lessonFind);
};

const getInstructorClasses = (req, res) => {
  const { idInstructor } = req.params;

  const instructorFind = instructors.find((instructor) => {
    return instructor.id === Number(idInstructor);
  });

  if (!instructorFind) {
    return res.status(404).json({ message: "Instrutor não existe" });
  }

  const lessonInstructorFind = lessons.filter((lesson) => {
    return lesson.instructor_id === Number(idInstructor);
  });

  if (!lessonInstructorFind.length) {
    return res
      .status(404)
      .json({ message: "Instrutor não tem aulas cadastradas" });
  }

  return res.status(200).json(lessonInstructorFind);
};

module.exports = {
  createClasses,
  getAllClasses,
  getClassData,
  getInstructorClasses,
};
