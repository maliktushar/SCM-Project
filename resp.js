navbar = document.querySelector('.navbar');
openmenu = document.querySelector('.openmenu');

openmenu.addEventListener('click',show);

function show(){
    navbar.style.display='flex';
    navbar.style.top='0';

}
// for form section
function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user")
    {
        window.alert("login successfully");
        return true;
    }
}