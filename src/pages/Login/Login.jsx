import Title from "../../components/Title/Title";

import Card from "../../components/Card/Card";
import LoginForm from "./LoginForm";
import './Login.css'

export function Login() {

    

    return (<Card>
        {/* <img src={logoAbitare} alt="Esto es el logo" style={{ width: 200 }} />
         */}
        <Title p_text='Abitare' p_sz={3} />
        <span className="subtitle">Accede a tu panel de residente o administrador</span>

        <LoginForm/>

        

    </Card>)

}

export default Login