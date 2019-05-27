if (localStorage.getItem('shemosuli') === null || localStorage.getItem('shemosuli') === '{}'){
    document.getElementById('reg').style.display = 'block';
    document.getElementById('signIn').style.display = 'block';
    document.getElementById('gasvla').style.display = 'none';
   document.getElementById('saxgv').style.display = 'none';
    
    
}else{
    document.getElementById('reg').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    shemosuli = JSON.parse(localStorage.getItem('shemosuli'));
    document.getElementById('logOut').addEventListener('click', () =>{
        localStorage.setItem('shemosuli', '{}')
    })
    document.getElementById('nameSurname').innerText = `${shemosuli.name} ${shemosuli.lastName}`;
}



//// ეს იმისათვის რომ დავტოვოთ მომხმარებელის სახეი და გვარი საიტზე,ანუ არ დაარეფრეშოს
// function checkUser (){
//     let user = (localStorage.getItem('active.user')
//     if (!user || user == ''){
//         console.log('ara');
//     } else {
//         console.log('ki');
//     }
// }
// checkUser ();


