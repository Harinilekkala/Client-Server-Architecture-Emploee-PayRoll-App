function Validate()
{
    let userid = document.getElementById("userID").value;
    let password = document.getElementById("password").value;
    let mailid = document.getElementById("mail-id").value;
    if(userid == "Harini@123" && password == "Harini@123" && mailid == "harini.lekkala1997@gmail.com" )
    //if(mailid == "harini.lekkala1997@gmail.com")
    {
        alert("Login Successful.")
        window.open('../Home.html');
    }
    elseif
    {
        alert("Login Failed.");
    }

    {
        alert("Signed Successful")
        window.open('../Home.html');
    }
}