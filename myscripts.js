$("button").click(function (event) {
  event.preventDefault();
  $("input").animate(
    {
      width: "toggle",
    },
    150,
    function () {
      // animation complete
    }
  );
});
