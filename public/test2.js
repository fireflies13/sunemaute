function handleChange(checkbox, id) {

  if(id.localeCompare('expend1')==0){

    if(checkbox.checked == true){
      document.getElementById("hnwlbl_1").innerHTML = "Weniger lesen";
    }
    else{
      document.getElementById("hnwlbl_1").innerHTML = "Mehr lesen";
    }
  }

  else {

    if(checkbox.checked == true){
      document.getElementById("hnwlbl_2").innerHTML = "Weniger lesen";
    }
    else{
      document.getElementById("hnwlbl_2").innerHTML = "Mehr lesen";
    }

  }

}
