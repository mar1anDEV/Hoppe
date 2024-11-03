document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('toggleNav').addEventListener('click', function(){
        document.querySelector('.navbar-collapse-ui').style.display = 'block';
        document.querySelector(".navbar-collapse-ui").classList.toggle("open");
    });
    document.getElementById('closeMenu').addEventListener('click', function(){
        document.querySelector('.navbar-collapse-ui').style.display = 'none';
    })

    let userInput = document.querySelector('.search-input');
    userInput.addEventListener('input', function(){
        const DieselLink = "https://hoppe.parts/sortiment/dieseltanks.html";
        const validInputDiesel = ['dieseltank','DIESELTANK','Dieseltank'];
        if(validInputDiesel.includes(userInput.value)){
            window.location.href = DieselLink;
        }
        const HydraulikLink = "https://hoppe.parts/sortiment/hydraulik/hydrauliktanks.html";
        const validInputHydraulik = ['hydrauliktank','hydraulik','Hydrauliktank','Hydrauliktanks','HYDRAULIKTANKS'];
        if(validInputHydraulik.includes(userInput.value)){
            window.location.href = HydraulikLink;
        } 
        const staukästenLink = "https://hoppe.parts/sortiment/staukasten.html"
        const validStaukästenInput = ["Staukästen","STAUKÄSTEN","staukästen"];
        if(validStaukästenInput.includes(userInput.value)){
            window.location.href = staukästenLink;
        } 
    })
});

