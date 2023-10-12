const express = require("express");
const routes = express();

const {
  getInstructors,
  getInstructorData,
  createInstructor,
  updateInstructor,
  updateInstructorStatus,
  deleteInstructor,
} = require("./controllers/instructors");

const {
  createClasses,
  getAllClasses,
  getClassData,
  getInstructorClasses,
} = require("./controllers/classes");

routes.get("/instructors", getInstructors);
routes.get("/instructors/:id", getInstructorData);
routes.post("/instructors", createInstructor);
routes.put("/instructors/:id", updateInstructor);
routes.patch("/instructors/:id/status", updateInstructorStatus);
routes.delete("/instructors/:id", deleteInstructor);

routes.post("/instructors/:idInstructor/classes", createClasses);
routes.get("/classes", getAllClasses);
routes.get("/classes/:id", getClassData);
routes.get("/instructors/:idInstructor/classes", getInstructorClasses);

module.exports = routes;
