window.onload = function(){

  document.getElementById("text_changer").onclick = function(){
    console.log('Hello');
    console.log(document.getElementById("firstDiv").innerHTML);
    console.log(document.getElementById("firstDiv").innerHTML.localeCompare("Mehr lesen"));
    console.log(document.getElementById("firstDiv").innerHTML.localeCompare("Mehr lesen") == 0);

    if (document.getElementById("firstDiv").innerHTML.localeCompare("Mehr lesen") == 0){
      document.getElementById("firstDiv").innerHTML = "Weniger lesen";
    }
    else {
      document.getElementById("firstDiv").innerHTML = "Mehr lesen";
    }
  }

}

function handleChange(checkbox) {
    if(checkbox.checked == true){
      document.getElementById("hnwlbl_1").innerHTML = "Weniger lesen";
      console.log('checked now')
    }else{
      console.log('unchecked now')
      document.getElementById("hnwlbl_1").innerHTML = "Mehr lesen";

   }
}
  // $('#change').click(function() {
    //     $("label[for='applyDistanceSlab']").text("10 kms");
    // });
