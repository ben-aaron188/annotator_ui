function collect_php(var_data) {
  console.log('triggered php server call');
  $.ajax({
    type: "POST",
    url: "./php/collect.php",
    data: {
      data_pre: var_data
    },
    error: function(data) {
      // alert(data);
      console.log('no ajax connection');
    },
    success: function(data) {
      // console.log(data);
      console.log("data submitted");
    },
  });
}
