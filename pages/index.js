import { useState } from "react"

function Home(){
    return (
        <body>
            <h1>Home 5</h1>
            <Contador />
        </body>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1)
    }

    return (
        <div>
            <div>
                {contador}
            </div>
            <button onClick={adicionarContador}>
                adicionar contador
            </button>
        </div>
    )
}

const style = {
    "bodyStyle": {
        "background-color": "green"
    }
}

export default Home