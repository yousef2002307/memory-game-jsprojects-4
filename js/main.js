// Select The Start Game Button
document.querySelector(".control-buttons span").onclick = function () {

    // Prompt Window To Ask For Name
    let yourName = prompt("Whats Your Name?");
  
    // If Name Is Empty
    if (yourName == null || yourName == "") {
  
      // Set Name To Unknown
      document.querySelector(".name span").innerHTML = 'Unknown';
  
    // Name Is Not Empty
    } else {
  
      // Set Name To Your Name
      document.querySelector(".name span").innerHTML = yourName;
  
    }
  
    // Remove Splash Screen
    document.querySelector(".control-buttons").remove();
  
  };
  
  // Effect Duration
  let duration = 1000;
  
  // Select Blocks Container
  let blocksContainer = document.querySelector(".memory-game-blocks");
  
  // Create Array From Game Blocks
  let blocks = Array.from(blocksContainer.children);
  
  // Create Range Of Keys
  // let orderRange = [...Array(blocks.length).keys()];
  
  let orderRange = Array.from(Array(blocks.length).keys());
  shuffle(orderRange);
  blocks.forEach((ele,index) =>{
ele.style.order = orderRange[index];
ele.onclick = function(){
isflipped(ele);
};
  });
/////is flipped class
function isflipped(z){
z.classList.add('is-flipped');
let filterblocks = blocks.filter(flipped => flipped.classList.contains("is-flipped"));
if(filterblocks.length == 2){
  stopclicking();
  hasmatched(filterblocks[0],filterblocks[1]);
}
}
function stopclicking(){
  blocksContainer.classList.add("stop");
  setTimeout(function(){
    blocksContainer.classList.remove("stop");
  },1000);
}
function hasmatched(x1,x2){
  let tries = document.querySelector(".tries span");
  if(x1.dataset.technology == x2.dataset.technology){
    x1.classList.remove("is-flipped");
    x2.classList.remove("is-flipped");
    x1.classList.add("has-match");
    x2.classList.add("has-match");
    document.querySelector(".succ").play();

  }else{
    tries.textContent = parseInt(tries.textContent) + 1;
    document.querySelector(".fail").play();
    setTimeout(function(){
      x1.classList.remove("is-flipped");
      x2.classList.remove("is-flipped");
    },1000);
  }
}
  function shuffle(array){
    let current = array.length,
    temp,
    random;
    while(current > 0){
      let random = Math.floor(Math.random() * current);
      current--;
      temp = array[current];
      array[current] = array[random];
      array[random] = temp;
    }
    return array;
  }
  console.log();