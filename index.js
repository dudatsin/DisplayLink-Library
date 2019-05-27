if (localStorage.getItem('shemosuli') === null || localStorage.getItem('shemosuli') ==='{}'){
    
}else{
    window.location = 'index.html';
}
document.getElementById('form--reg').addEventListener('submit', (event) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    //am yvelafers chayris user-shi
    const user = {}
    user.name = document.getElementById('fname').value;
    user.lastName = document.getElementById('lname').value;
    user.number = document.getElementById('number').value;
    user.password = document.getElementById('password').value;
    user.tpassword = document.getElementById('tpassword').value;
    user.email = document.getElementById('email').value;
    if (Object.keys(users).includes(user.email)) {
        document.getElementById('warning').style.color = 'red';
        document.getElementById('warning').innerText = 'ასეთი მომხმარებელი უკვე არსებობს';
        event.preventDefault();
        return false;
    }
    users[user.email] = user;
    localStorage.setItem('shemosuli',JSON.stringify(user))
    localStorage.setItem('users', JSON.stringify(users));

});