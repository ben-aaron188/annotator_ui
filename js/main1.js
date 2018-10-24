var boundary_allowance_interval;
var statements_to_rate = 5;
var instructions;
var constrained_meta;
// var condition = 2;
var data_collection_listener = false;
var mancheck1_counter = 0;
var mancheck2_counter = 0;



function set_statements_condition(ajax_retrieved_obj) {
  participant_id = parseInt(ajax_retrieved_obj.cond_cond);
  // practice_statements = get_sub_by_participant_id(-1);
  files = get_sub_by_participant_id(participant_id);
  condition = files[0].cond;
}

// get object based on participant_id identifier
function get_sub_by_participant_id(participant_getter_id){
  var selection = [];
  $(files_pre).each(function(i, eli) {
    if (eli.participant_id == participant_getter_id) {
      selection.push(eli);
    }
  });
  return selection;
}

// create textarea
$(document).ready(function() {
  get_condition_from_db(display_condition_details);
  // condition_meta = {cond_cond: 2};
  // condition = condition_meta.cond_cond;
  // set_statements_condition(condition_meta);
  // init_data();
  // if (condition == 0) {
  //   instructions = instructions_normal;
  //   constrained_meta = false;
  // } else if (condition == 1) {
  //   instructions = instructions_full;
  //   constrained_meta = false;
  //   boundary_allowance_interval = 100;
  // } else if (condition == 2) {
  //   instructions = instructions_partial;
  //   constrained_meta = true;
  //   boundary_allowance_interval = 20;
  // }
  var div_screen_1 = "<div id='div_text_1'></div>";
  var slider_placeholder_div = "<div id='div_placeholder'></div>";
  var proceed_button = "<div id='proceed'>Next</div>";
  $('body').append(div_screen_1);
  $('body').append(slider_placeholder_div);
  $('body').append(proceed_button);

  populate('div_text_1', instructions_base[0], true);
  $("#proceed").on('click', function() {
    populate('div_text_1', instructions_base[1], true);
    // $("#proceed").on('click', function() {
    // populate('div_text_1', instructions[2], true);
    $("#proceed").on('click', function() {

      set_statements_condition(condition_meta);
      init_data();
      if (condition == 0) {
        instructions = instructions_normal;
        constrained_meta = false;
      } else if (condition == 1) {
        instructions = instructions_full;
        constrained_meta = false;
        boundary_allowance_interval = 100;
      } else if (condition == 2) {
        instructions = instructions_partial;
        constrained_meta = true;
        boundary_allowance_interval = 20;
      }

      populate('div_text_1', instructions_base[3], true);
      $("#proceed").on('click', function() {
        populate('div_text_1', instructions[4], true);
        $("#proceed").on('click', function() {
          populate('div_text_1', instructions[5], true);
          $("#proceed").on('click', function() {
            populate('div_text_1', instructions[6], true);
            $("#proceed").on('click', function() {
              populate('div_text_1', instructions[7], true);
              $("#proceed").on('click', function() {
                if ($('input[name=check1]:checked').val() == condition) {
                  collect_data('check', 'check1', "na");
                  populate('div_text_1', instructions[8], true);
                  $("#proceed").on('click', function() {
                    if (($('input[name=check2]:checked').val() == 0 && condition == 0) || $('input[name=check2]:checked').val() == 1 && (condition == 1 || condition == 2)) {
                      collect_data('check', 'check2', "na");
                      populate('div_text_1', instructions[9], true);
                      $("#proceed").on('click', function() {
                        populate('div_text_1', instructions[10], true);
                        add_slider('div_text_1', 'practice_slider_1', constrained_meta, files[0]);
                        $("#proceed").on('click', function() {
                          if (($("#practice_slider_1").val() >= 80 && condition != 2) || $("#practice_slider_1").val() >= 60 && condition == 2) {
                            collect_data('slider', 'practice_slider_1', files[0]);
                            populate('div_text_1', instructions[11], true);
                            add_slider('div_text_1', 'practice_slider_2', constrained_meta, files[1]);
                            $("#proceed").on('click', function() {
                              if (($("#practice_slider_2").val() <= 20 && condition != 2) || $("#practice_slider_2").val() <= 65 && condition == 2) {
                                collect_data('slider', 'practice_slider_2', files[1]);
                                populate('div_text_1', instructions[12], true);
                                $("#proceed").on('click', function() {
                                  populate('div_text_1', files[0], false);
                                  add_slider('div_text_1', 'slider_1', constrained_meta, files[0]);
                                  $("#proceed").on('click', function() {
                                    collect_data('slider', 'slider_1', files[0]);
                                    populate('div_text_1', files[1], false);
                                    add_slider('div_text_1', 'slider_2', constrained_meta, files[1]);
                                    $("#proceed").on('click', function() {
                                      collect_data('slider', 'slider_2', files[1]);
                                      populate('div_text_1', files[2], false);
                                      add_slider('div_text_1', 'slider_3', constrained_meta, files[2]);
                                      $("#proceed").on('click', function() {
                                        collect_data('slider', 'slider_3', files[2]);
                                        populate('div_text_1', files[3], false);
                                        add_slider('div_text_1', 'slider_4', constrained_meta, files[3]);
                                        $("#proceed").on('click', function() {
                                          collect_data('slider', 'slider_4', files[3]);
                                          populate('div_text_1', files[4], false);
                                          add_slider('div_text_1', 'slider_5', constrained_meta, files[4]);
                                          $("#proceed").on('click', function() {
                                            collect_data('slider', 'slider_5', files[4]);
                                            populate('div_text_1', instructions[13], true);
                                            $("#proceed").on('click', function() {
                                              collect_data('text', 'strategy_input', 'na');
                                              populate('div_text_1', instructions[14], true);
                                              $("#proceed").on('click', function() {
                                                collect_data('text', 'prolific_input', 'na');
                                                var meta_mancheck_counters = {
                                                  manchek1: mancheck1_counter,
                                                  manchek2: mancheck2_counter
                                                };
                                                var p_id = condition_meta.cond_cond;
                                                collected_data.push(meta_mancheck_counters);
                                                collected_data.push(p_id);
                                                console.log('reached end of task');
                                                collect_php(JSON.stringify(collected_data));
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              } else {
                                alert(instructions[18].text);
                              }
                            });
                          } else {
                            alert(instructions[17].text);
                          }
                        });
                      });
                    } else {
                      alert(instructions[16].text);
                      mancheck2_counter += 1;
                    }
                  });
                } else {
                  alert(instructions[15].text);
                  mancheck1_counter += 1;
                }
              });
            });
          });
        });
      });
    });
    // });
  });
});

function populate(div_id, content_target, get_html) {
  var populate_text;
  var dyn_div_id;
  if (get_html == true) {
    populate_text = content_target.html;
    dyn_div_id = '#' + div_id;
    $(dyn_div_id).html(populate_text);
  } else if (get_html == false) {
    populate_text = content_target.text;
    dyn_div_id = '#' + div_id;
    $(dyn_div_id).text(populate_text);
  }
  $("#div_placeholder").empty();
  $('#proceed').unbind();
}

function add_slider(div_id, slider_id, constrained, content_target) {
  var slider_val;
  var input = '#' + slider_id;
  var input_tracker = '#tracker_' + slider_id;
  // var dyn_div_id = '#' + div_id;
  var dyn_div_id = '#div_placeholder';
  var slider = '<div class="slider_wrapper"><input type="range" min="1" max="100" value="50" class="slider" id=' + slider_id + '><div class="slider_output_labels"><span class="label_left">TRUTH</span><span class="label_right">LIE</span></div><output class="tracker_wrapper" id="tracker_' + slider_id + '">Judgment: <span></span></output></div>';
  $(dyn_div_id).html(slider);
  if (constrained == true) {
    slider_val = content_target.algrat;
    var boundary_lower = (slider_val - boundary_allowance_interval / 2);
    var boundary_upper = (slider_val + boundary_allowance_interval / 2);
    $(input).css(
      'background-image', 'linear-gradient( to right, #eb2e22, #eb2e22 ' + boundary_lower + '%, #10d55f ' + boundary_lower + '%, #10d55f ' + boundary_upper + '%, #eb2e22 ' + boundary_lower + '%)'
    );
  } else if (constrained == false) {
    slider_val = 50;
  }
  $(input).val(slider_val);
  $(input).on('input', function() {
    track_slider(constrained, slider_val, input, input_tracker);
  });
  $(input_tracker).children('span:first').text(slider_val);
  trigger_button('off');
}

function track_slider(constrained, start_value, input_obj, tracker_obj) {
  var input = input_obj;
  var output = tracker_obj;
  var current_value = $(input).val();
  var boundary_lower = (start_value - boundary_allowance_interval / 2);
  var boundary_upper = (start_value + boundary_allowance_interval / 2);
  $(output).children('span:first').text($(input).val());
  if (constrained == true) {
    if (current_value > boundary_upper || current_value < boundary_lower) {
      console.log('stop');
      if ($(output).children('span:first').addClass('input_allowed')) {
        $(output).children('span:first').removeClass('input_allowed').addClass('input_exceeded');
        trigger_button('off');
      }
    } else if ($(output).children('span:first').addClass('input_exceeded')) {
      $(output).children('span:first').removeClass('input_exceeded').addClass('input_allowed');
      trigger_button('on');
    }
  } else if (constrained == false) {
    if (current_value == start_value) {
      trigger_button('off');
    } else if (current_value != start_value) {
      trigger_button('on');
    }
  }
}

function trigger_button(how) {
  if (how == 'on') {
    if ($("#proceed").hasClass('button_off')) {
      $("#proceed").removeClass('button_off').addClass('button_on');
    } else {
      $("#proceed").addClass('button_on');
    }
  } else if (how == 'off') {
    if ($("#proceed").hasClass('button_on')) {
      $("#proceed").removeClass('button_on').addClass('button_off');
    } else {
      $("#proceed").addClass('button_off');
    }
  }
}

function init_data() {
  get_unid();
  collected_data = [];
  var meta_data_obj = {};
  var browser_os = $.pgwBrowser();
  collected_data.unid = unid;
  meta_data_obj.browsername = browser_os.browser.name;
  meta_data_obj.browserversion = browser_os.browser.majorVersion;
  meta_data_obj.ts_time = moment().format('LTS');
  meta_data_obj.ts_date = moment().format('l');
  meta_data_obj.unid = unid;
  meta_data_obj.condition = condition;
  collected_data.push(meta_data_obj);
}

function collect_data(data_type, target_id, content_target) {
  var id_for_data_collection = '#' + target_id;
  var data_value;
  var data_package;
  if (data_type == 'slider') {
    participant_judgment = $(id_for_data_collection).val();
    statement_text = content_target.text;
    statement_id = content_target.id;
    statement_algrat = content_target.algrat;
    data_id = target_id;
    data_value_type = data_type;

    data_package = {
      meta_participant_judgment: participant_judgment,
      meta_statement_text: statement_text,
      meta_statement_id: statement_id,
      meta_statement_algrat: statement_algrat,
      meta_data_id: data_id,
      meta_data_value_type: data_value_type
    };
    collected_data.push(data_package);
  } else if (data_type == 'check') {
    var check_proxy_id = 'input[name=' + target_id + ']:checked';
    data_value = $(check_proxy_id).val();
    data_id = target_id;
    data_value_type = data_type;

    data_package = {
      meta_participant_judgment: data_value,
      meta_data_id: data_id,
      meta_data_value_type: data_value_type
    };
    collected_data.push(data_package);
  } else if (data_type == 'text') {
    data_value = $(id_for_data_collection).val();
    data_id = target_id;
    data_value_type = data_type;

    data_package = {
      meta_participant_text: data_value,
      meta_data_id: data_id,
      meta_data_value_type: data_value_type
    };
    collected_data.push(data_package);
  }
  // return collected_data;
}


//

// TODO: dynamic slider id through function param DONE
// TODO: labels DONE
// TODO: boundary allowance DONE
// TODO: conditions: full range = max allowance, partial range DONE

// TODO: selection of n statements from bank DONE
// TODO: db integration: json with: id, algrat, condition, judgment DONE
// TODO: control handles on conditionals DONE
// TODO: add IC DONE

// BUG: collect data is run with every click RESOLVED

// TODO: set up DB on server DONE
// TODO: conditional on practice statements DONE
// TODO: layout fix of slider in Chrome DONE
// TODO: layout of slider if statement is html DONE

// TODO: statements/server integration: set subj in DB DONE
// TODO: in JS from R: all ids rep 3 times per condition and 5 statements per subj DONE

// TODO: update IC after approval
// TODO: improve loading of file in the background
// TODO: more info for statements (context)
// BUG: content target for practice statements does not work
