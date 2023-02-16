import inquirer from "inquirer";

const question = [
  {
    type: "input",
    name: "name",
    message: "¿Cuál es tu nombre?",
    validate: (answer: string) => {
      if (["", " ".repeat(answer.length)].includes(answer)) {
        return "NO HOME, NO!: Introduce un nombre válido";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "userType",
    message: "¿Qué tipo de usuario eres?",
    choices: ["Profesor", "Profesor asistente", "Alumno"],
  },
];

inquirer.prompt(question).then(({ name, userType }) => {
  switch (userType) {
    case "Profesor":
      console.log(`Hola, bon dia, 'senyu'.`);
      break;
    case "Profesor asistente":
      console.log(`Bon dia, ${name}`);
      break;
    case "Alumno":
      console.log("Ey! Bon dia.");
      break;
    default:
      console.log("¿Tú quién eres?");
      break;
  }
});
