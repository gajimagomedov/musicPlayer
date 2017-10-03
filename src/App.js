const btnCloseSearch = document.querySelector('.form-music__submit');
const inputSearch = document.querySelector('.form-music__search');
const playBtnControls = document.querySelector('.player-controls__play');
const playBtnItem = document.querySelectorAll('.item-music__play');

inputSearch.addEventListener('input', function(){
    inputSearch.value == "" ?  btnCloseSearch.style.display = "none" : btnCloseSearch.style.display = "block";   
});

btnCloseSearch.addEventListener('click',function(event){
    event.preventDefault();
    btnCloseSearch.style.display = "none";
    inputSearch.value = "";
});

playBtnControls.addEventListener('click',function(){
    playBtnControls.classList.toggle('player-controls__pause');
});

playBtnItem.addEventListener('click',function(){
    playBtnItem.classList.toggle('item-music__pause');
});

