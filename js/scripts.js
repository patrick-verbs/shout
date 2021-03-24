$( document ).ready(function() {
//
  $("#theForm").submit(function() {
    const userRandomText = $("#sayStuff").val().toUpperCase();

    $("#echo").text(userRandomText);

    event.preventDefault();// Prevent default behavior where output text (in <h1>) disappears immediately
  });
//
});