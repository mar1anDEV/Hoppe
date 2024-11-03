document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('toggleNav').addEventListener('click', function(){
        document.querySelector('.navbar-collapse-ui').style.display = 'block';
        document.querySelector(".navbar-collapse-ui").classList.toggle("open");
    });
    document.getElementById('closeMenu').addEventListener('click', function(){
        document.querySelector('.navbar-collapse-ui').style.display = 'none';
    })
});
