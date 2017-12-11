function login()
{
  if(document.getElementById("username").value == "admin")
    {
      if(document.getElementById("password").value == "incorrect")
        {
          document.getElementById("loginform").innerHTML = "<h1>hey look you did it</h1>";
        }
    }
}