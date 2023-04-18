

function Next_home_adm(){
    window.location.href="home_adm.html"
}
function Next_login(){
    window.location.href="login.html"
}

var login_arr = [];

function Button_Entrar_login(){
     let novoItemuser = document.getElementById("username").value;
     login_arr.push(novoItemuser);
     document.getElementById("username").value = "";
     localStorage.meuArr = JSON.stringify(login_arr);
     Next_home_adm();
  }

  //localStorage.meuArr = JSON.stringify(login_arr);



