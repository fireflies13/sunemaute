var active_textbox = null;
var about_textbox = null;

window.onload = function(){
  about_textbox = document.getElementById('text_about');
  about_textbox.style.visibility = 'hidden';
}


// ##### SHOW/HIDE TEXTBOXES #####
function show_textbox(textbox){
  hide_textboxes();
  set_active_textbox(textbox);
  show_active_textbox();
}
function hide_textboxes(){
  var textbox_home = document.getElementById('text_home');
  var textbox_games = document.getElementById('text_games');
  var textbox_picker = document.getElementById('text_picker');

  textbox_home.style.display = 'none';
  textbox_games.style.display = 'none';
  textbox_picker.style.display = 'none';
}


// ##### ACTIVE_TEXTBOX #####
function show_active_textbox(){
  if (active_textbox == null) {return;}
  active_textbox.style.display = 'block';
}
function set_active_textbox(textbox){
  active_textbox = textbox;
}



// ##### ABOUT_TEXTBOX #####
function toggle_about_textbox(){

  var visible = about_textbox.style.visibility.localeCompare('hidden')

  if (visible == 0) {
    about_textbox.style.visibility = 'visible';
  }
  else {
    about_textbox.style.visibility = 'hidden';
  }


  // var about_status = (about_textbox.style.display.localeCompare('none'));

  // console.log(about_status);


}
