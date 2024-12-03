const point = document.getElementById('point')
const operator = document.querySelectorAll('.operator')


function Button(target) {
  let result = document.getElementById('display')
  let target_value = target.innerHTML;

  if (target_value == "AC") {
    result.innerHTML = "0"
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML)
  } else if (result.innerHTML == "0" && target_value == "."){
    result.innerHTML = "0."
  } else if (result.innerHTML == "0" && target_value == "00"){
    result.innerHTML = "0"
  } else if (result.innerHTML == "0" && target_value == "+"){
    result.innerHTML = "0"
  } else if (result.innerHTML == "0" && target_value == "*"){
    result.innerHTML = "0"
  } else if (result.innerHTML == "0" && target_value == "/"){
    result.innerHTML = "0"
  } else if (result.innerHTML == "0"){
      result.innerHTML = target_value
  } else {
    if (isNaN(target_value)){
      let ope = result.innerHTML.slice(-1)
      if (!isNaN(ope)){
        result.innerHTML += target_value
      }
    } else {
      result.innerHTML += target_value
    }
  }
}




