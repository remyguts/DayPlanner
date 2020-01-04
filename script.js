$(document).ready(function() {
  var inputForm;
  var saveBtn;
  var twentyFourHours = moment().format("HH");
  var twelveHours = moment().format("h");
  var currentTimecolor;
  var localStorageGet;
  var localStorageSet;
  var inputArrays = [
    { rtime: "9am", mtime: 9 },
    { rtime: "10am", mtime: 10 },
    { rtime: "11am", mtime: 11 },
    { rtime: "12pm", mtime: 12 },
    { rtime: "1pm", mtime: 13 },
    { rtime: "2pm", mtime: 14 },
    { rtime: "3pm", mtime: 15 },
    { rtime: "4pm", mtime: 16 },
    { rtime: "5pm", mtime: 17 }
  ];

  for (var i = 0; i < inputArrays.length; i++) {
    $("#inputs").append([
      $("<p>").text(inputArrays[i].rtime),
      $("<input/>", {
        type: "text",
        id: inputArrays[i].mtime,
        name: "plans",
        placeholder: "",
        "data-time": inputArrays[i].mtime
      }),
      $("<button>", {
        id: inputArrays[i].mtime
      }).on("click", function() {
        let selector = $(this).attr("id");

        let userInput = $("#" + selector).val();
        console.log(userInput);
        localStorage.setItem(selector, userInput);
      })
    ]);
  }

  
});
