//this must be set to 'false' for correct order insertion into database
// $.ajaxSetup({ async: false });

function bunch_set_conditions(array_with_conditions) {
  $(array_with_conditions).each(function(i, eli) {
    console.log(eli, i);
    init_conditions_in_db(eli, 0);
  });
}

function shuffle(array) {
  var newarr = [];
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    newarr[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return newarr;
}

// sets initial conditions
function init_conditions_in_db(condition, status_update) {
  $.ajax({
    type: "POST",
    url: "./php/init_conditions.php",
    data: {
      condition: condition,
      updatable_status: status_update
    },
    error: function(data) {
      // alert(data);
    },
    success: function(data) {
      console.log(data);
      console.log("conditions initialized");
    },
  });
}


// last batch
// var participant_ids = [];
//
// for (var i = 1; i < 780; i++) {
//   participant_ids[i] = i;
// }
//
// var final_participant_ids = shuffle(participant_ids);
// //
// $.ajaxSetup({
//   async: false
// });
// bunch_set_conditions(final_participant_ids);
// $.ajaxSetup({
//   async: true
// });
