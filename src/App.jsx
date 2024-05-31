import Posts from "./Posts"

function App() {
  const data = "17 de ago. 2024"
  const title = "O que é linguagem de programação? Conheça as principais"
  const text = "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
  
  const data_1 = "12 de jul, 2024"
  const title_1= "GitHub agora permite fazer login sem precisar de senha"
  const text_1 = "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."
  
  const data_2 = "21 de jun, 2024"
  const title_2= "Por que os hiperlinks são azuis em sua maioria?"
  const text_2 = "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-zinc-800 flex flex-col items-center w-full">
        <h1 className="my-4 mt-10 text-orange-400	text-4xl">Code<span className="text-white	">Lab</span></h1>
        <div className="bg-zinc-700 w-3/4 h-12 flex mb-10 rounded-lg max-md:w-11/12">
          <button><img src="icon-search.svg" alt="pesquisar" /></button>
          <input type="text" name="" id="" placeholder="Pesquisar no blog"
            className="bg-zinc-700" />
        </div>
      </div>
        <div className="flex flex-col items-center mt-8 w-3/4 max-md:w-11/12">
          <Posts date={data} title={title} text={text} />
          <Posts date={data_1} title={title_1} text={text_1} />
          <Posts date={data_2} title={title_2} text={text_2} />
        </div>
    </div>

  )
}

export default App
