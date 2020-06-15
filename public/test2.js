function handleChange(checkbox, id) {

  if(id.localeCompare('expend1')==0){

    if(checkbox.checked == true){
      document.getElementById("hnwlbl_1").innerHTML = "&#8593;&nbsp;&nbsp;Weniger lesen&nbsp;&nbsp;&#8593;";
    }
    else{
      document.getElementById("hnwlbl_1").innerHTML = "&#8595;&nbsp;&nbsp;Mehr lesen&nbsp;&nbsp;&#8595;";
    }
  }

  else {

    if(checkbox.checked == true){
      document.getElementById("hnwlbl_2").innerHTML = "&#8593;&nbsp;&nbsp;Weniger lesen&nbsp;&nbsp;&#8593;";
    }
    else{
      document.getElementById("hnwlbl_2").innerHTML = "&#8595;&nbsp;&nbsp;Mehr lesen&nbsp;&nbsp;&#8595;";
    }

  }

}
