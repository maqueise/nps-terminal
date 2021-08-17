import { Link} from "react-router-dom"
function NPS(){
    return(
        <section className="nps-container">
           <h1 className="titulo">
            Em uma escala de 0 a 10, o quanto você indicaria nossa empresa 
            a um amigo ou familiar?
        </h1>
        <section className="nps">
            <button value="0">0</button> 
            <button value="1">1</button> 
            <button value="2">2</button> 
            <button value="3">3</button> 
            <button value="4">4</button> 
            <button value="5">5</button> 
            <button value="6">6</button> 
            <button value="7">7</button> 
            <button value="8">8</button> 
            <button value="9">9</button> 
            <button value="10">10</button> 
        </section>
            <Link to="/teste">Proximo</Link>
        </section>
    )
}

export default NPS