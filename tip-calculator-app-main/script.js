const person_input = document.querySelector(".person_p")
const err = document.querySelector('#error')
let bill = document.querySelector('#bill')
let five = document.querySelector('#five')
let ten = document.querySelector('#ten')
let fifteen = document.querySelector('#fifteen')
let twenty_five = document.querySelector('#twenty_five')
let fifty= document.querySelector('#fifty')
let custom= document.querySelector('#custom')
let reset = document.querySelector('#reset')
let amout_value = document.querySelector('#amout_value')
let total = document.querySelector('#total_value')



let bill_tip;
let per_tip ;



five.addEventListener('click',function(){
     bill_tip = bill.value * 0.5
     per_tip = bill_tip / person_input.value

    if( person_input.value == 0 || person_input.value === ""){
        err.style.display = 'flex'
        amout_value.textContent= `$0.00`
        person_input.style.border= "0.02rem solid red"
        
    } else{
       err.style.display = 'none'
     person_input.style.border = " none"
    amout_value.textContent= `$${per_tip.toFixed(2)}`
    person_input.style.border= "none"
    }
    
  total.textContent = `$${bill_tip.toFixed(2)}`
    
    
})
ten.addEventListener('click',function(){
     bill_tip = bill.value * 0.10
     per_tip = bill_tip / person_input.value

    if( person_input.value == 0 || person_input.value === ""){
        err.style.display = 'flex'
        amout_value.textContent= `$0.00`
        person_input.style.border= "0.02rem solid red"
        
    } else{
       err.style.display = 'none'

    amout_value.textContent= `$${per_tip.toFixed(2)}`
    person_input.style.border= "none"

    }
    
  total.textContent = `$${bill_tip.toFixed(2)}`
    
    
})
fifteen.addEventListener('click',function(){
     bill_tip = bill.value * 0.15
     per_tip = bill_tip / person_input.value

    if( person_input.value == 0 || person_input.value === ""){
        err.style.display = 'flex'
        amout_value.textContent= `$0.00`
         person_input.style.border= "0.02rem solid red"
        
    } else{
       err.style.display = 'none'
      person_input.style.border= "none"
    amout_value.textContent= `$${per_tip.toFixed(2)}`

    }
    
  total.textContent = `$${bill_tip.toFixed(2)}`
    
    
})
twenty_five.addEventListener('click',function(){
     bill_tip = bill.value * 0.25
     per_tip = bill_tip / person_input.value

    if( person_input.value == 0 || person_input.value === ""){
        err.style.display = 'flex'
        amout_value.textContent= `$0.00`
         person_input.style.border= "0.02rem solid red"
        
    } else{
       err.style.display = 'none'

    amout_value.textContent= `$${per_tip.toFixed(2)}`
     person_input.style.border= "none"

    }
    
  total.textContent = `$${bill_tip.toFixed(2)}`
    
    
})
fifty.addEventListener('click',function(){
     bill_tip = bill.value * 0.5
     per_tip = bill_tip / person_input.value

    if( person_input.value == 0 || person_input.value === ""){
        err.style.display = 'flex'
        amout_value.textContent= `$0.00`
           person_input.style.border= "0.02rem solid red"
        
    } else{
       err.style.display = 'none'
  person_input.style.border= "none"
    amout_value.textContent= `$${per_tip.toFixed(2)}`

    }
    
  total.textContent = `$${bill_tip.toFixed(2)}`

    
    
})

custom.addEventListener('change', function(){
     let cus_tip = custom.value / 100
     bill_tip = bill.value * cus_tip
     per_tip = bill_tip / person_input.value

     if( person_input.value == 0 || person_input.value === ""){
          err.style.display = 'flex'
          amout_value.textContent= `$0.00`
           person_input.style.border= "0.02rem solid red"
          
      } else{
         err.style.display = 'none'
  person_input.style.border= "none"
      amout_value.textContent= `$${per_tip.toFixed(2)}`
  
      }
      
    total.textContent = `$${bill_tip.toFixed(2)}`
 
})



bill.addEventListener("focus", function(){
  reset.style.backgroundColor = "hsl(172, 67%, 45%)";
})
person_input.addEventListener("focus", function(){
  reset.style.backgroundColor = "hsl(172, 67%, 45%)";
})


reset.addEventListener('click', function(){
     amout_value.textContent= `$0.00`;
     total.textContent = `$0.00`;
     person_input.value = "";
     bill.value = "";
     reset.style.backgroundColor = "#0d686d";
     custom.value = "";
      person_input.style.border= "none"
      err.style.display = 'none'

 })