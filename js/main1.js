// create textarea
$(document).ready(function() {
  var div_screen_1 = "<div id='div_text_1'></div>";
  $('body').append(div_screen_1);
});

function populate(div_id, content_target) {
  var populate_text = content_target.text;
  var dyn_div_id = '#' + div_id;
  $(dyn_div_id).text(populate_text);
}


// populate('div_text_1', files[0]);

function add_slider(div_id, constrained, content_target) {
  var slider_val;
  var slider = '<div class="slider_wrapper" id="slider_wrapper_1"><input type="range" min="1" max="100" value="50" class="slider" id="slider_1" oninput="track_slider()"><output class="tracker_wrapper" id="slider_tracker_1">Judgment: <span></span></output></div>';
  var dyn_div_id = '#' + div_id;
  $(dyn_div_id).append(slider);
  if (constrained == true) {
    slider_val = content_target.algrat;
  } else if(constrained == false){
    slider_val = 50;
  }
  $("#slider_1").val(slider_val);
  $("#slider_tracker_1").children('span:first').text(slider_val);
}

function track_slider() {
    var input = "#slider_1";
    var output = "#slider_tracker_1";
    $(output).children('span:first').text($(input).val());
}

// add_slider('div_text_1', true, files[1])


// TODO: dynamic slider id through function param
// TODO: labels
// TODO: boundary allowance
