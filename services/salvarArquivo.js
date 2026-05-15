import {writeFile} from "node:fs/promises"
import { lerArquivo } from "./lerArquivo.js";

export async function salvarArquivo(usuario) {
  const usuarios = await lerArquivo() || [];

  if(usuarios.some(user => user && user.id === usuario.id)){
    console.error("Usuário já existe na base");
    return;
  }

  usuarios.push(usuario);

  try {
    await writeFile('./data/database.json', JSON.stringify(usuarios), {encoding: 'utf-8'});
    console.log("Usuário salvo!")

  } catch (error) {
    console.error("Erro ao salvar o usuário na database.")
  }
  
}