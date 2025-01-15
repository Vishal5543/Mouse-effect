const main=document.querySelector('.main')

const mouse=document.querySelector('.mouse')

const image=document.querySelector('.image')

main.addEventListener('mousemove',(e)=>{
    gsap.to(mouse,{
      x:e.x,
      y:e.y,
      duration:0.5,
      opacity:1,
      ease: "back.out(1.7)",
    })
})

image.addEventListener('mouseenter',()=>{
  
  mouse.innerHTML='view more'
  mouse.style.backgroundColor="#F4F4F44D"
  gsap.to(mouse,{
    scale:6,
    
    
  })
})
image.addEventListener('mouseleave', () => {
  mouse.style.backgroundColor='white'
  mouse.innerHTML=''
  gsap.to(mouse, {
    scale:1
  })
})



