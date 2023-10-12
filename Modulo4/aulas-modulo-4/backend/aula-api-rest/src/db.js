const database = {
  idInstructor: 3,
  idLesson: 2,
  instructors: [
    {
      id: 1,
      name: "Guido",
      email: "gui.do@cubos.com",
      status: true,
    },
    {
      id: 2,
      name: "dani",
      email: "dani.el@cubos.com",
      status: true,
    },
  ],
  lessons: [
    {
      id: 1,
      instructor_id: 1,
      title: "Primeiro servidor",
      description: "Construindo primeiro servidor",
    },
  ],
};

module.exports = database;
