function Square(props)
{
    return(
        <button onClick={props.onSquareClick} className={props.isWinner?"squareColor":"square"}>{props.value}</button>
    );
}

export default Square;