let box = document.body.querySelector(".box")
let list =["dog","fish","cat","shark","cat","dog"]

for(let i=0; i<list.length; i++){
  let ele = document.createElement("div")
  if(list[i]==="cat"){
    ele.innerHTML="I am a cat"
    box.appendChild(ele)
  }else if(list[i]==="dog"){
    ele.innerHTML="borf borf"
    box.appendChild(ele)
  }else{
    ele.innerHTML="I'm an animal"
    box.appendChild(ele)
  }
}

function shuffle(list){
  let nw = list.sort(()=> Math.random() - 0.5)
  for(let i=0; i<nw.length; i++){
    let ele = document.createElement("div")
    if(nw[i]==="cat"){
      ele.innerHTML="I am a cat"
      box.appendChild(ele)
    }else if(nw[i]==="dog"){
      ele.innerHTML="borf borf"
      box.appendChild(ele)
    }else{
      ele.innerHTML="I'm an animal"
      box.appendChild(ele)
    }
}}

document.body.querySelector(".random").addEventListener("click", function(){
  document.body.querySelector(".box").innerHTML=" ";
  shuffle(list);
})