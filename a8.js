let array = [] ;
let side, list;
let adder = document.getElementById("add");
adder.onclick = add;
function add(){
    side = document.getElementById("side");
    if(array.indexOf(side.value) == -1){
        array.push(side.value);
    }
    list = document.getElementById("TheHardOne");
    list.innerHTML = ""
    for(let i=0; i < array.length; i++){
        list.innerHTML += "<li>" + array[i].toString() + "</li>";
    }
}
let remover = document.getElementById("remove");
remover.onclick = remove;
function remove(){
    list = document.getElementById("TheHardOne");
    list.innerHTML = "";
    array.length = 0;
}
let main, Rice, Naan, money = 0;
let cost = document.getElementById("cost_div");
let final = document.getElementById("cal");
final.onclick = cal; 
function cal(){
main = document.getElementById("main");
if(main.value == "Lamb Vindaloo"){
    money = 15;
    Rice = document.getElementById("Rice");
    Naan = document.getElementById("Naan");
    if(Rice.checked == true){
      money += 3; 
    }
    if(Naan.checked == true){
      money += 2;
    }
    if(array.length > 0){
      for(let i1=0; i1 < array.length; i1++){
          if(array[i1] == "Papadums"){
              money += 2;
          }
          if(array[i1] == "Samosas"){
              money += 5;
          }
          if(array[i1] == "Pakoras"){
              money += 6;
          }
          if(array[i1] == "Kheer"){
              money += 5;
          }
      }
    }
} else {
    if(main.value == "Butter Chicken"){
        money = 13;
        Rice = document.getElementById("Rice");
        Naan = document.getElementById("Naan");
        if(Rice.checked == true){
          money += 3; 
        }
        if(Naan.checked == true){
          money += 2;
        }
        if(array.length > 0){
        for(let i2=0; i2 < array.length; i2++){
          if(array[i2] == "Papadums"){
              money += 2;
          }
          if(array[i2] == "Samosas"){
              money += 5;
          }
          if(array[i2] == "Pakoras"){
              money += 6;
          }
          if(array[i2] == "Kheer"){
              money += 5;
          }
      }
    }
    } else {
        if(main.value == "Prawn Masala") {
            money = 17;
            Rice = document.getElementById("Rice");
            Naan = document.getElementById("Naan");
            if(Rice.checked == true){
              money += 3; 
            }
            if(Naan.checked == true){
              money += 2;
            }
            if(array.length > 0){
            for(let i1=0; i1 < array.length; i1++){
                if(array[i1] == "Papadums"){
                    money += 2;
                }
                if(array[i1] == "Samosas"){
                    money += 5;
                }
                if(array[i1] == "Pakoras"){
                    money += 6;
                }
                if(array[i1] == "Kheer"){
                    money += 5;
                }
             }
           }  
        }
    }
}
cost.innerHTML = money.toString() + "$";
}