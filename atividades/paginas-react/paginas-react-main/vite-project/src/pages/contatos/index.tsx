import ButtomFatec from "../../components/ButtomFatec";
import InputFatec from "../../components/InputFatec";
import Header from "../../components/Header";

export default function Contatos(){
    return (
        <>
            <Header />
            <h1>Ficou interessado?</h1>
            <InputFatec placeholder="Usuário" type="string" />
            <InputFatec placeholder="E-mail" type="string" />
            <InputFatec placeholder="Senha" type="password" />
            <InputFatec placeholder="Telefone" type="tel" />
            <ButtomFatec type="submit" label="Entrar em contato"/>
        </>
        )
}