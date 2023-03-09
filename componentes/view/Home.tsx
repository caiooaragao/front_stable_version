import LogoInicial from "../atomos/LogoInicial/LogoInicial"
import LoginForm from "../organismos/LoginForm"

const Home = () => {
  return (
    <div className="login">
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                <LogoInicial/>
                <LoginForm/>
            </div>
        </div>
    </div>

  )
}

export default Home