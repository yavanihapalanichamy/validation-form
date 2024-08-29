function login(){
    var name=document.getElementById("user").value
    var pass=document.getElementById("password").value
    if(name.length<4||name.length==0){
        alert("username invalid")
        return false
    }
    else if(pass.length<6||pass.length>12||pass.length==0){
        alert("password is invlaid")
        return false
    }
    document.getElementById('display').innerHTML="USERNAME :" + name 
    document.getElementById('view').innerHTML="PASSWORD :" + pass
}