const searchBtn = document.querySelector('.searchbtn');
const closeBtn = document.querySelector('.closebtn');
const searchBox = document.querySelector('.search-field');

// Navbar Search
searchBtn.addEventListener('click', ()=>{
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
})

closeBtn.addEventListener('click', ()=>{
    searchBox.classList.remove('active');
    searchBtn.classList.remove('active');
    closeBtn.classList.remove('active');
})

