const img = document.querySelector("img");
const crsr = document.querySelector("#cursor");
// img.addEventListener("mousemove",function(dets){
//     const degree_in_x = 79-dets.x/10;
//     // const degree_in_y = Math.abs(degree_in_x);
//     const degree_in_y = -(31-dets.y/10);
//     img.style.transform = `rotateX(${degree_in_x}deg) rotateY(${degree_in_y}deg) rotateZ(${degree_in_y})`
//     img.style.transition = "all ease 0.1s";
// })
// img.addEventListener("mouseleave",function(dets){
//     img.style.transform = `rotateX(0deg) rotateY(0deg)`
//     img.style.transition = "all ease 2s";
// })

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-10+"px";
    crsr.style.top = `${dets.y-10}px`;
})