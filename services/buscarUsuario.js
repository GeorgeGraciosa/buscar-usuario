export async function buscarUsuario(username) {
  const url = `https://api.github.com/users/${username}`

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    
    if(!resposta.ok) throw new Error("Falha na busca de usuário");
    
    return dados;
  } catch (error) {
    console.log("Falha pela busca de usuários na API do Github")
  }
  
}