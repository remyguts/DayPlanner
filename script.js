$(document).ready(function() {
  
  var twentyFourHours = parseInt( moment().format("HH") );
  
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
      $("<button>save</button>", {
        id: inputArrays[i].mtime
      }).on("click", function() {
        let selector = $(this).attr("id");

        let userInput = $("#" + selector);
        console.log(userInput);
        localStorage.setItem(selector, userInput.val());
      })
    ]);

    var savedInput = localStorage.getItem(inputArrays[i].mtime);
    let userInput = $("#" + inputArrays[i].mtime);
    if (savedInput !== null) {
     

      
      userInput.val(savedInput);
    }

  var currentRowTime = inputArrays[i].mtime;

  
console.log ( "current time",
    twentyFourHours
)

console.log ( "current row time",
    inputArrays[i].mtime
)
if (currentRowTime < twentyFourHours) {
    console.log ( "past")
    userInput.addClass ("past")
    //gray

}

if ( currentRowTime === twentyFourHours) {
    console.log ("current")
    userInput.addClass ("present")
    //red
}

if ( currentRowTime > twentyFourHours) {
    console.log ("future")
    userInput.addClass ("future")
    //green
}
  }
});
