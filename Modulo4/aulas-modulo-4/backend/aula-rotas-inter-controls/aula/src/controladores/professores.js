const teachers = require("../dba");

const filterTeachers = (req, res) => {
  const { stack } = req.query;
  let result = teachers;

  console.log("cheguei aqui pai");

  if (stack) {
    result = teachers.filter((teacher) => {
      return teacher.stack === stack;
    });
  }

  res.send(result);
};

const findTeacher = (req, res) => {
  const teacherFound = teachers.find((teacher) => {
    return teacher.id === Number(req.params.id);
  });

  console.log("funcao de encontrar professor executada");

  res.send(teacherFound);
};

module.exports = {
  filterTeachers,
  findTeacher,
};
