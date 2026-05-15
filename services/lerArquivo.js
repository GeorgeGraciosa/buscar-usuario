import {readFile} from 'node:fs/promises'

export async function lerArquivo() {
  try {
    const arquivoText = await readFile("./data/database.json", {encoding: 'utf-8'});
    return JSON.parse(arquivoText);
  } catch (error) {
    console.error("Arquivo corrompido, não foi possível ler os dados")
  }
}