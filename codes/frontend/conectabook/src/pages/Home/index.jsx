import logo from '../../assets/logo.png';
import image from '../../assets/image.png';
import Button from '../../components/button';
import './style.css'

function Home() {

  return (
    <div>
      <header className='headerHome'>
        <img className='logo' src={logo} alt="" />
        <div className="links">
          <a className='entrar' href="#">Entrar</a>
          <a href="#">Cadastrar</a>
        </div>
      </header>

      <main>

        <div className='info'>
          <div className="textos">
            <h1>ConectaBook: Uma plataforma para conexão de leitores.</h1>
          <p>
            Uma plataforma feita para conectar leitores, descobrir novas histórias e compartilhar experiências através de clubes, avaliações e encontros literários.
          </p>
          </div>
          

          <div className='buttons'>
            <Button text="Criar Conta" onClick={() => alert("Clicou!")} />
            <Button text="Entrar" onClick={() => alert("Clicou!")} />
          </div>
        </div>

        <img className='image' src={image} alt="" />

      </main>
    </div>
  )
}

export default Home
