import Header from '../../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <h1>Sobre nosso projeto</h1>
      <hr />
      <div>
        <h3>
          Olá, tudo bem?
          <br/>
          <br/>
          Esse site está sendo desenvolvido para colocar em práticas os conceitos de React e outros vistos na disciplina de Programação Web.
          Aqui estão reunidos quase todas as atividades feitas até agora, incluindo o redirecionamento de páginas
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="70" height="70"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="70" height="70"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="70" height="70"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" width="70" height="70"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" width="70" height="70"/>
          </div>
          Tudo muito legal, muito belo... Se não fosse uma coisa: aparentemente eu não tenho um pingo de bom gosto para design de sites
          <img src="https://www.exsitec.se/hubfs/pexels-pixabay-270404%20%281%29.webp" alt="" width="700" height="600"/>
        </h3>
      </div>
    </>
  )
}
