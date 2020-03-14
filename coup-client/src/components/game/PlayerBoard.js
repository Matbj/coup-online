import React from 'react'

export default function PlayerBoard(props) {
    let boardItems = null
    if(props.players.length > 1) {
        boardItems = props.players.map((player, index) =>
            <span key={index} style={{display: "inline-block", marginRight: "10px", marginLeft: "10px"}}>
                <p>{player.name}</p>
                <p>Coins: {player.money}</p>
                <p>Influences: {player.influences.length}</p>
                {/* <p>{player.influences.join(', ')}</p> */}
            </span>
        );
    } else {
        boardItems = <b>{props.players[0]} Wins!</b>
    }
    return (
        <div style={{textAlign: "center"}}>
            {boardItems}
        </div>
    )
  }



