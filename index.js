  function checkForm(form)
  { // validation fails if the input is blank
    if(form.name.value == "") {
      alert("Error: Name is Blank");
      form.name.focus();
      return false;
    }

    if(form.message.value =="") {
      alert("Error: Message is Blank");
      form.name.focus();
      return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    

    // validation fails if the input doesn't match our regular expression
    if(!re.test(form.name.value)) {
      alert("Error: Name contains Invalid Characters");
      form.name.focus();
      return false;
    }

    // validation was successful
    return true;
  }
  

