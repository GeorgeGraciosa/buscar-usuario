import { stdin, stdout } from "process"; 
import { createInterface } from 'node:readline/promises'
import { readFile, writeFile } from 'node:fs/promises';
import { buscarUsuario } from '../services/buscarUsuario.js';

async function main(){
  const interfaceConsole = createInterface(stdin, stdout);

  const respostaConsole = await interfaceConsole.question('Digite o usuário que será buscado:\n');

  await buscarUsuario(respostaConsole);

  interfaceConsole.close();
}
main()