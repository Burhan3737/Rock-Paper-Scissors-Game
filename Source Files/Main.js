import React,{useState,useEffect} from "react";


export default function Main(){
let rock="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7BPNkNH9Nmpv3tOLyHG4_Qm79T8xGzX2tnwXYMLYS9OvsGvm1EH9Th-vXFWUk5CzGWM&usqp=CAU"
let paper="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCmaf-HaltNtvmtB6EG8jCjkbICmErLjlvACv-XM1yXMDVN5Tk_FJOKYdlGNCYaihdBk&usqp=CAU"
let scissor="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgD-YGvdnKK80yXLGJGXg7Z6QVYVNFGwqqc0kUTAVkGsnZQYZi70HCHwhp5P8-IEPY6VE&usqp=CAU"


const [player,setPlayer]=useState("");

const [com,setCom]=useState("");

const[playerScore,setPlayerScore]=useState(0);

const[comScore,setComScore]=useState(0);

const[comment,setComment]=useState();

const[flag,setFlag]=useState(false);

const[pclass,setPclass]=useState("");

const[cclass,setCclass]=useState("")


// const [data, setData] = useState([]);
 

//  useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/photos`)
//    .then((response) => response.json())
//    .then((mydata)=>{setData(mydata)})
//    .catch((err)=>{console.log("Error")});
//  }, []);

// const newdata= data.map((data,id ) => (
//      <>      
//     <h3 key={data.id}>{data.title}</h3>
//     <img key={data.id} src={data.thumbnailUrl}></img> 
//     <img  src={data.url}></img> 
//     </> 
// ))

function generateresult(){

    if(player===rock && com===scissor || player===paper && com===rock || player===scissor && com===paper){
   setPlayerScore(old=>old+1) 
   setComment("YOU WON")
    }
    
   else if(com===rock && player===scissor || com===paper && player===rock || com===scissor && player===paper){
   setComScore(old=>old+1)
   setComment("YOU LOST") 
   }

   else if(com===rock && player===rock || com===scissor && player===scissor || com===paper && player===paper)setComment("TIE")
}


function randomCom(){
 let randnum=Math.floor(Math.random() *3)
 if(randnum===0){
    setCom(rock);
 }

else if(randnum===1){
    setCom(paper);
 }

 else setCom(scissor)
}

function handleClick(){

    setCom("");
    setPlayer(" ")
    setComScore(0)
    setPlayerScore(0)
    setComment("")
    setFlag(false)
    
}

function handleGame(property){
    setPlayer(property)
    randomCom();
    setFlag(true);
    
   }




useEffect(()=>{
    setComment("")

    setTimeout(()=>{
        
        generateresult()
    },1750)

    setCclass("com-")

    setTimeout(()=>{
        setCclass("com")
    },500)


    setPclass("player-")
    setTimeout(()=>{
        setPclass("player")
    },500)
    
    
},[player,com])






    return (
<>

<div className="title">
<h1>Rock Paper Scissors Game</h1>

</div>


<div className="display">

<h3>YOU {playerScore}-{comScore} COM</h3>

<div className="display-result" >

{flag ? <><img  className={pclass} width="100%" src={player}/> <img className={cclass} width="100%" src={com} /> </>: <h3>CLICK ON ANY ICON TO START THE GAME</h3> }
</div>

<div className="comment"><h2>{comment}</h2></div>


<div className="select" >


    <div className="border" onClick={e=>handleGame(rock)}>
        <img className="sRock" src={rock}/>
    </div>
    <div className="border" onClick={e=>handleGame(paper)}>
        <img className="sPaper" src={paper} />
    </div>
    <div className="border" onClick={e=>handleGame(scissor)}>
        <img className="sScissor"  src={scissor} />
    </div>
</div>

<button onClick={handleClick}>Restart Game</button>

      
</div>


</>


    )
}