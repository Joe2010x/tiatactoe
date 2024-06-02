const Winner = (props: {player : string}) => 
    {
        return (
            <div className="winner">
                {props.player !== "" && "The winner is" }{props.player}
            </div>
        )
    }

export default Winner;