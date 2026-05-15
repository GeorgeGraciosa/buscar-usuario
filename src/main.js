import { stdin, stdout } from "process"; 
import { createInterface } from 'node:readline/promises'
import { buscarUsuario } from '../services/buscarUsuario.js';
import { salvarArquivo } from "../services/salvarArquivo.js";

async function main(){
  const interfaceConsole = createInterface(stdin, stdout);

  const respostaConsole = await interfaceConsole.question('Digite o usuário que será buscado:\n');

  const usuario = await buscarUsuario(respostaConsole);

  await salvarArquivo(usuario);

  interfaceConsole.close();
}
main()