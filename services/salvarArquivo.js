import {writeFile} from "node:fs/promises"
import { lerArquivo } from "./lerArquivo.js";

export async function salvarArquivo(usuario) {
  const usuarios = await lerArquivo();

  if(!usuarios){
    await writeFile("./data/database.json", JSON.stringify([usuarios]), {encoding: "utf-8"})
  }

  usuarios.push(usuario);
  await writeFile('./data/database.json', JSON.stringify(usuarios), {encoding: 'utf-8'});
}