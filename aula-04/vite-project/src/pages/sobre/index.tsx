import { Link } from "react-router-dom";

export default function Sobre(){
    return (
        <>
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Laudantium, suscipit. Natus, illo ab? Vel fugit enim quidem, 
                tempora facilis magni nulla aperiam inventore nam eos aspernatur? 
                Temporibus similique reiciendis impedit.
            </p>
            <Link to='/'>Home</Link>
        </>
        )
}