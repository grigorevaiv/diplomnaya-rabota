let today = new Date().toISOString().split('T')[0];
document.getElementById("date").setAttribute("min", today);

function validateTextInput(){
    if(document.getElementById("name").value.length > 0 &&
        document.getElementById("phone").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("service").value.length > 0 &&
        document.getElementById("date").value.length > 0 &&
        document.getElementById("time").value.length > 0 &&
        document.getElementById("master").value.length > 0
        ) {document.getElementById("submitbutton").disabled = false;}
        else{document.getElementById("submitbutton").disabled = true;}
}

//-----------------------------
let checkDate = document.getElementById("date");
checkDate.addEventListener('change', (event) => {

let selectedDate = document.getElementById("date").value;
let selectedTime = document.getElementById("time").value;
let selectedMaster = document.getElementById("master").value;
let mybutton = document.getElementById("submitbutton").disabled;

if (mybutton===true){
        var t = document.getElementById("time").getElementsByTagName("option");
        let now = new Date();
        let nowhours = now.getHours();
        let nowminutes = now.getMinutes();
        for (var i = 0; i < t.length; i++) {
          if ((today === selectedDate) && ((Number(document.getElementById("time").getElementsByTagName("option")[i].value.split(":")[0]) < nowhours) ||
              (Number(document.getElementById("time").getElementsByTagName("option")[i].value.split(":")[0]) === nowhours && (Number(document.getElementById("time").getElementsByTagName("option")[i].value.split(":")[1])) - nowminutes - 15 < 0))) {
            t[i].disabled = true
          } else {
            t[i].disabled = false
          }
        }
} 

if (selectedTime.length !== 0 && selectedMaster.length !==0) {
    
        let formData = new FormData();
        formData.append("master", selectedMaster);
        formData.append("date", selectedDate);
        formData.append("time", selectedTime);
        
        fetch('handlerMasterAvialability.php', {
            method: 'POST',
            body: formData
        }).then(result=>{
            if (result.result == "busy"){
                document.getElementById("submitbutton").disabled = true;
                document.getElementById("message").innerHTML = "Простите, в выбранное вами время мастер занят. Пожалуйста, выберите другой день, время или мастера."
            } else {
                document.getElementById("message").innerHTML = ""
            }
        }
        )
    }

if(document.getElementById("name").value.length > 0 &&
        document.getElementById("phone").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("service").value.length > 0 &&
        document.getElementById("date").value.length > 0 &&
        document.getElementById("time").value.length > 0 &&
        document.getElementById("master").value.length > 0
        ) {document.getElementById("submitbutton").disabled = false;}
        else{document.getElementById("submitbutton").disabled = true;}

})
//-----------------------------
let checkTime = document.getElementById("time");
checkTime.addEventListener('change', (event) => {

let selectedDate = document.getElementById("date").value;
let selectedTime = document.getElementById("time").value;
let selectedMaster = document.getElementById("master").value;
    
if (selectedDate.length !== 0 && selectedMaster.length !==0) {
        
            let formData = new FormData();
            formData.append("master", selectedMaster);
            formData.append("date", selectedDate);
            formData.append("time", selectedTime);
            
            fetch('handlerMasterAvialability.php', {
                method: 'POST',
                body: formData
            }).then(response=>response.json())
            .then(result=>{
            if (result.result == "busy"){
                document.getElementById("submitbutton").disabled = true;
                document.getElementById("message").innerHTML = "Простите, в выбранное вами время мастер занят. Пожалуйста, выберите другой день, время или мастера."
            } else {
                document.getElementById("message").innerHTML = ""
            }
        }
        )
    }
    
if(document.getElementById("name").value.length > 0 &&
        document.getElementById("phone").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("service").value.length > 0 &&
        document.getElementById("date").value.length > 0 &&
        document.getElementById("time").value.length > 0 &&
        document.getElementById("master").value.length > 0
        ) {document.getElementById("submitbutton").disabled = false;}
        else{document.getElementById("submitbutton").disabled = true;}

})
//-----------------------------
let checkMaster = document.getElementById("master");
checkMaster.addEventListener('change', (event) => {

let selectedDate = document.getElementById("date").value;
let selectedTime = document.getElementById("time").value;
let selectedMaster = document.getElementById("master").value;

    if (selectedDate.length !== 0 && selectedTime.length !==0) {
    
        let formData = new FormData();
        formData.append("master", selectedMaster);
        formData.append("date", selectedDate);
        formData.append("time", selectedTime);
        
        fetch('handlerMasterAvialability.php', {
            method: 'POST',
            body: formData
        }).then(response=>response.json())
        .then(result=>{
            if (result.result == "busy"){
                document.getElementById("submitbutton").disabled = true;
                document.getElementById("message").innerHTML = "Простите, в выбранное вами время мастер занят. Пожалуйста, выберите другой день, время или мастера."
            } else {
                document.getElementById("message").innerHTML = ""
            }
        }
        )
    }
if(document.getElementById("name").value.length > 0 &&
        document.getElementById("phone").value.length > 0 &&
        document.getElementById("email").value.length > 0 &&
        document.getElementById("service").value.length > 0 &&
        document.getElementById("date").value.length > 0 &&
        document.getElementById("time").value.length > 0 &&
        document.getElementById("master").value.length > 0 
        ) {document.getElementById("submitbutton").disabled = false;}
        else{document.getElementById("submitbutton").disabled = true;}
})
//-----------------------------
    function sendForm(form){
        let formData = new FormData(form);
        fetch('handlerAppointment.php',{
            method: 'POST',
            body: formData
        }).then(response=>response.json())
          .then(result=>{
              if(result.result == "success"){
                  document.getElementById("submitbutton").disabled = true;
                  document.getElementById("message").innerHTML = "Вы записаны к " + document.getElementById("master").value + "у, на " +  document.getElementById("date").value + " в " + document.getElementById("time").value +". Информация о записи отправлена на вашу электронную почту."
              }
        }) 

    }
