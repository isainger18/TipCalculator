let tipCalc= document.getElementById("tipCalc")
let billPeople= document.getElementById("billPeople")
let service= document.getElementById("billPercent")
let btn= document.querySelector(".btn")
let showResult= document.getElementById("result")

btn.addEventListener("click", totalBill)

function totalBill(){
    
    servicePercent= service.options[service.selectedIndex].value
    totalService= tipCalc.value*servicePercent;
    let total= totalService/billPeople.value;
    showResult.classList.add("myStyle")
    if(tipCalc.value == "" || billPeople.value == "" ||servicePercent=="chooseBill"){
        alert("Please enter the value")
    }else{
    showResult.innerHTML=`Pay Tip : <i class="fa fa-rupee"></i>${total.toFixed(2)}`
    }
    clearInput()
}

function allowNumbersOnly(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}

function clearInput(){
    let elements = []
    elements=document.querySelectorAll(".input")
    elements.forEach(e =>{
        e.value= ""
    })
}