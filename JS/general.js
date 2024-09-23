
//show witch link is active 
export const showActiveNavLinksFunction = () => {
  const navlinks = document.querySelectorAll('.header-middle-link')
  navlinks.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      navlinks.forEach((link) => {
        link.classList.remove('active')
      })
      e.target.classList.add('active')
    })
  })
}


// //// for showing and hidiing the search input 
export const inputFunction = () => {
  const searchIcon = document.querySelector('.material-symbols-outlined');
  const searchInput = document.getElementById('Search');
  
  searchInput.style.display = 'none';
  searchIcon.addEventListener('click', () => {
    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block';
    } else {
      searchInput.style.display = 'none';
    }
  });
}



