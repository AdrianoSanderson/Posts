import { useState } from "react"

export default function Posts({ date, title, text }){
    const [like, setLike] = useState("Vector.svg")
    const [bgColor, setBgColor] = useState("border-zinc-700")

    function handleLike() {
        if(like === "Vector.svg"){
          setLike("Like.svg")
          setBgColor("border-orange-400")
        }else{
          setLike("Vector.svg")
          setBgColor("border-zinc-700")
        }
      }
    return (
        <div className={(`flex flex-col mt-3 border-2 rounded-lg ${bgColor}`)}>
            <div className="flex justify-between m-3">
                <span className="text-orange-400">{date}</span>
                <button onClick={handleLike}><img src={like} alt="Like" /></button>
            </div>
            <h1 className="text-white m-3">{title}</h1>
            <p className="text-slate-400 m-3 mb-4">{text}</p>
        </div>
    )
}
//border-orange-400
//"flex flex-col mt-3 border-2 "