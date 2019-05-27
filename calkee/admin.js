function shesvla(){
    name=document.getElementById('adminName').value;
    password=document.getElementById('password').value;
    if (name==='admin' && password==='paroli'){
        window.location='adminPage.html';
        sessionStorage.setItem('auth', name+password);
        
    }else{
        sessionStorage.setItem('auth','');
    }
}