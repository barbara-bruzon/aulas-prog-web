import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function NotFound (){
    return(
        <>
        <Header />
            <h1>Ops, página não encontrada</h1>
            <p>A URL digitada não foi encontrada</p>
        </>
    )
}