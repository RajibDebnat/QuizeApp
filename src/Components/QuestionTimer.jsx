import { useEffect, useState } from "react"

export default function QuestionTimer({timeOut,onTimeOut,mode}){

    const [remainingTime,setRemainingTime]=useState(timeOut);

    useEffect(()=>{
        
        // console.log('SetTimeout')
       const setTimer = setTimeout(onTimeOut,timeOut);
return ()=>{ 
    clearTimeout(setTimer)
}
    },[onTimeOut,timeOut])


    useEffect(()=>{
        // console.log('Set InterVal')
        const interVal =  setInterval(()=>{
            setRemainingTime(prev=>prev - 100);
        },100)
        return ()=>{clearInterval(interVal)}
        // here i don't have to add any dependencies becasue either state or prop value i can add here . if i used that value inside this useEffect function 
    },[])


    return <progress  value={remainingTime} max={timeOut}  className={mode}/>
}