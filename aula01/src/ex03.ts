import formatar from "./ex01";

const carros = ["Gol", "Corsa", "Uno", "Fiesta"];
const motos = ["CG", "XRE", "Biz"];
const veiculos = [...carros, ...motos]
veiculos.forEach((element) => console.log(formatar(element)));