function sendmail(){
    let name =document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let phone=document.getElementById=("phone").value;
    let textarea=document.getElementById("meassage").value;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}