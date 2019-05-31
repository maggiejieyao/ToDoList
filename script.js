//add li to ul list
var outC = document.getElementById("container");
var listUl = document.createElement("ul");
document.getElementById("addBtn").addEventListener("click", function(){
        
        //check if ther's a input
        var inputText = document.getElementById("in").value;
        var msg = document.getElementById("alertMess"); if(document.getElementById("in").value.length != 0){
            msg.innerHTML = "";
            var listLi = document.createElement("li");
            
            //listLi.innerHTML = inputText;
            //listUl.appendChild(listLi);
            var radioHtml = '<input type = "checkbox" name="radio" id="radio"/>';
            var labelHtml = radioHtml + '<label class="labelCon">' + ' '+ inputText + '</lable>';
            listLi.innerHTML = labelHtml;
            listUl.appendChild(listLi);
            

            var removeBtn = document.createElement("button");
            removeBtn.id = "btn"+ inputText;
            removeBtn.style.marginLeft = "20px";
            removeBtn.style.borderRadius = "20%";
            removeBtn.innerHTML = "remove";
            //removeBtn.onclick = document.removeChild(listLi);
            removeBtn.addEventListener("click", function(){
                listUl.removeChild(listLi);
            })
            listLi.appendChild(removeBtn);
        //add alert message validation
        }else{
            msg.innerHTML = "Nothing there my friend."; 
        }

})
outC.appendChild(listUl);

//add appear effect to smile icon
var icon = document.getElementById("smileIcon");
icon.addEventListener("click", function(){
    var list = document.getElementsByClassName("toDoList")[0];
    if(list.style.display == "none"){
        list.style.display = "block";
    }
})