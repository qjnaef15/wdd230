function submitForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

  
    localStorage.setItem('contactFormName', name);
    localStorage.setItem('contactFormEmail', email);
    localStorage.setItem('contactFormComment', comment);

    
    document.getElementById('confirmation-banner').style.display = 'block';

   
    setTimeout(function () {
      closeBanner();
    }, 6000);
  }

  function closeBanner() {
    document.getElementById('confirmation-banner').style.display = 'none';
  }

  var storedName = localStorage.getItem('contactFormName');
  var storedEmail = localStorage.getItem('contactFormEmail');
  var storedComment = localStorage.getItem('contactFormComment');

  if (storedName && storedEmail && storedComment) {
    document.getElementById('name').value = storedName;
    document.getElementById('email').value = storedEmail;
    document.getElementById('comment').value = storedComment;
  }