
interface ICube {
    index : number,
    value : string,
    player : string,
    cubes : string[],
    setPlayer : (value: string) => void,
    setCubes : (cb : (value: string[]) => string[]) => void,
    setWinner :  (value: string) => void,
}

const Cube =({value, player, index, cubes, setPlayer, setCubes, setWinner} : ICube) => {

    const checkWin = () => 
        {
            if (
                (cubes[0] === cubes[1] && cubes[1] === cubes[2] && cubes[2] !== "") ||
                (cubes[3] === cubes[4] && cubes[4] === cubes[5] && cubes[5] !== "") ||
                (cubes[6] === cubes[7] && cubes[7] === cubes[8] && cubes[8] !== "") ||
                (cubes[0] === cubes[3] && cubes[3] === cubes[6] && cubes[6] !== "") ||
                (cubes[1] === cubes[4] && cubes[4] === cubes[7] && cubes[7] !== "") ||
                (cubes[2] === cubes[5] && cubes[5] === cubes[8] && cubes[8] !== "") ||
                (cubes[0] === cubes[4] && cubes[4] === cubes[8] && cubes[8] !== "") ||
                (cubes[2] === cubes[4] && cubes[4] === cubes[6] && cubes[6] !== "") ) return true
                else return false;
        }
    if (checkWin()) setWinner(player === "X" ? "O" : "X");

    const handleClick = () =>
        {
            if (value != "X" && value != "O" )
                {
                    setCubes(pre => {pre[index] = player; return pre});
                    setPlayer (player === "X" ? "O" : "X");
                }
        }

    return (
        <div className="cube" onClick={handleClick}>
            {value}
        </div>
    )
}

export default Cube