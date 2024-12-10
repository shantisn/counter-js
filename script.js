let head=document.querySelectorAll(".heading")
let arr=Array.from(head)
arr.map((item=>{
    let count=0

    function counterJs(){
       
    item.innerHTML=`${count}%`
    count++
    if(count==item.dataset.number)
        clearInterval(stop)
    }
    
    
    
     let stop=setInterval(()=>{
        counterJs()
    },item.dataset.speed)
}))
