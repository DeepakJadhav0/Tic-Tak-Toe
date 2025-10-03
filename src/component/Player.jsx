import { useState } from "react"

export default function Player({name , symbol}) {
    const [isediting , setisediting] = useState(false)
    const [initialname , setinitialname] = useState(name)

    function handelClickEdit(){
        setisediting(isediting => !isediting)
    }
    let playerName =   <span className="player-name">{initialname}</span>

    if(isediting){
        playerName = <input value={initialname} onChange={handelPlayerName} type="text" required />
    }

    function handelPlayerName(event){
        setinitialname(event.target.value)
    }
  return (
        <li>
          <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handelClickEdit}>{isediting ? "Save" : "Edit"}</button>
        </li>
  )
}
