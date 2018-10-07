var boundary_allowance_interval = 20;

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
  // var slider = "<div class='slider_wrapper' id='slider_wrapper_1'><input type='range' min='1' max='100' value='50' class='slider' id='slider_1' oninput='track_slider(true)'><output class='tracker_wrapper' id='slider_tracker_1'>Judgment: <span></span></output></div>";
  var slider = "<div class='slider_wrapper' id='slider_wrapper_1'><input type='range' min='1' max='100' value='50' class='slider' id='slider_1'><output class='tracker_wrapper' id='slider_tracker_1'>Judgment: <span></span></output></div>";
  var dyn_div_id = '#' + div_id;
  $(dyn_div_id).append(slider);
  if (constrained == true) {
    slider_val = content_target.algrat;
  } else if (constrained == false) {
    slider_val = 50;
  }
  $("#slider_1").val(slider_val);
  $("#slider_1").on('input', function() {
    track_slider(constrained, slider_val);
  });
  $("#slider_tracker_1").children('span:first').text(slider_val);
}

function track_slider(constrained, start_value) {
  var input = "#slider_1";
  var output = "#slider_tracker_1";
  var current_value = $(input).val();
  var boundary_lower = (start_value - boundary_allowance_interval / 2);
  var boundary_upper = (start_value + boundary_allowance_interval / 2);
  console.log(start_value);
  console.log((start_value + boundary_allowance_interval / 2));
  console.log(current_value);
  if (constrained == true) {
    $(input).css(
      'background-image', 'linear-gradient( to right, #eb2e22, #eb2e22 '+ boundary_lower +'%, #10d55f '+ boundary_lower +'%, #10d55f '+ boundary_upper +'%, #eb2e22 '+ boundary_lower +'%)'
    );
    if (current_value > boundary_upper || current_value < boundary_lower) {
      console.log('stop');
      // alert message
      // $(input).css('background', 'red');
    } else {
      console.log('ok');
    }
  } else {
    $(output).children('span:first').text($(input).val());
  }
}

// add_slider('div_text_1', true, files[1])


// TODO: dynamic slider id through function param
// TODO: labels
// TODO: boundary allowance DONE
