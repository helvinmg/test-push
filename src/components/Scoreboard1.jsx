import {useEffect, useState} from 'react'
function Scoreboard1()
{
      const [score,setScore]=useState(0)
      const [no_of_players,setPlayers]=useState(7)
      //useEffect will be run whenever score changes
        return (
            <>
            <h1>Score Board 1</h1>
            <h1 style={{'color':'blue'}}>{score}</h1>
            <h2 style={{'color':'green'}}>No of players: {no_of_players}</h2>
            <button onClick={()=>setScore(score+10)}>Goal</button>
            <button onClick={()=>setScore(score-5)}>Yellow Card</button>
            <button onClick={()=>setPlayers(no_of_players-1)}>Red Card</button>
            <button onClick={()=>setScore(0)}>Game Over</button>
            </>
        )
}
export default Scoreboard1;