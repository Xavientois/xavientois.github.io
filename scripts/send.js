// Reset form
function clear() {
  $("#name").val('');
  $("#email").val('');
  $("#message").val('');
}

// Send email when user clicks send
$("#sendMessage").on('click', function() {
  let form = $("#contactForm")[0].elements;

  $.ajax({
    type: "POST",
    url: "scripts/contact.php",
    data: {
      email: form.email.value,
      name: form.name.value,
      message: form.message.value
    },
    success: function(data, status){
      alert("Message sent successfully! Thanks for the message!");
      clear();
    },
    error: function(){
      alert("Message failed to send. Please email me directly at j2ramper@uwaterloo.ca");
    }
  });

  return false;
});
