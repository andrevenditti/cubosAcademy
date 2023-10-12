let { instructors, idInstructor } = require("../db");

const getInstructors = (req, res) => {
  return res.status(200).json(instructors);
};

const getInstructorData = (req, res) => {
  const { id } = req.params;

  const instructorFind = instructors.find(
    (instructor) => instructor.id === Number(id)
  );

  if (!instructorFind) {
    return res.status(404).json({ message: "Instrutor não existe" });
  }

  return res.status(200).json(instructorFind);
};

const createInstructor = (req, res) => {
  const { name, email, status } = req.body;

  if (!name) {
    return res.status(400).json({ message: "O nome é obrigatório" });
  }

  if (!email) {
    return res.status(400).json({ message: "O email é obrigatório" });
  }

  instructors.push({
    id: idInstructor++,
    name,
    email,
    status: status ?? true,
  });

  return res.status(201).json({ message: "Instrutor criado com sucesso!" });
};

const updateInstructor = (req, res) => {
  const { id } = req.params;
  const { name, email, status } = req.body;

  if (!name) {
    return res.status(400).json({ message: "O nome é obrigatório" });
  }

  if (!email) {
    return res.status(400).json({ message: "O email é obrigatório" });
  }

  const instructorFind = instructors.find(
    (instructor) => instructor.id === Number(id)
  );

  if (!instructorFind) {
    return res.status(404).json({ message: "Instrutor não existe" });
  }

  instructorFind.name = name;
  instructorFind.email = email;
  instructorFind.status = status;

  res.status(204).send();
};

const updateInstructorStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const instructorFind = instructors.find(
    (instructor) => instructor.id === Number(id)
  );

  if (!instructorFind) {
    return res.status(404).json({ message: "Instrutor não existe" });
  }

  instructorFind.status = status;

  res.status(204).send();
};

const deleteInstructor = (req, res) => {
  const { id } = req.params;

  const instructorFind = instructors.find(
    (instructor) => instructor.id === Number(id)
  );

  if (!instructorFind) {
    return res.status(404).json({ message: "Instrutor não existe" });
  }

  instructors = instructors.filter((instructor) => {
    return instructor.id !== Number(id);
  });

  res.status(204).send();
};

module.exports = {
  getInstructors,
  getInstructorData,
  createInstructor,
  updateInstructor,
  updateInstructorStatus,
  deleteInstructor,
};
