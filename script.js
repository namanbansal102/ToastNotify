console.log("Script is Running");
let mybutinner=document.querySelectorAll('.mybutinner')
let popbox=document.querySelector('.popbox')
let poptitle=document.querySelector('.poptitle')
let popImg=document.querySelector('.popImg')
let mypseudo=window.getComputedStyle(popbox,'::after')
mylist=["","https://cdn-icons-png.flaticon.com/128/845/845646.png","https://cdn-icons-png.flaticon.com/128/1828/1828843.png","https://cdn-icons-png.flaticon.com/128/4344/4344882.png","https://cdn-icons-png.flaticon.com/128/5683/5683325.png","https://cdn-icons-png.flaticon.com/128/702/702797.png"]
let cross=document.querySelector('.cross')
mybutinner.forEach(element => {
    element.addEventListener('click',(e)=>{
        console.log("Element is Clicked");
        let myclass=e.target.classList[0]
        let number=e.target.classList[2]
        let color=e.target.classList[3]
        console.log(number);
        console.log(myclass)
        console.log();
        popImg.src=mylist[number]
            setTimeout(() => { 
            popbox.style.visibility='visible'
            poptitle.innerHTML=`This is ${myclass} Toast`
        }, 500);
        setTimeout(() => {
            
            popbox.style.visibility='hidden'
        }, 2000);
    })
    
    
});
cross.addEventListener('click',()=>{
    popbox.style.visibility='hidden'

})