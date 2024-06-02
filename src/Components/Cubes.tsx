import { useState } from "react"
import { couldStartTrivia } from "typescript"
import Cube from "./Cube"
import Winner from "./Winner"

const Cubes = ()=> {
    const layout1 = ["1","2","3","4","5","6","7","8","9",];
    const layout2 = ["","","","","","","","","",];
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [cubes, setCubes] = useState(layout2)
    const [winner, setWinner] = useState("");

    
    return (
        <>
            <div className="Cubes">
                {cubes.map((c, index) => 
                    <Cube 
                        key = {index}
                        value = {c}
                        cubes = {cubes}
                        index = {index}
                        setCubes = {setCubes}
                        player = {currentPlayer}
                        setPlayer = {setCurrentPlayer}
                        setWinner = {setWinner}
                    />)}
            </div>
            <Winner player = {winner} />
        </>
    )
}

export default Cubes