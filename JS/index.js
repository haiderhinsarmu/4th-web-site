import { inputFunction, showActiveNavLinksFunction } from './general.js';

const App = document.getElementById('App');
const temporaryContent = document.getElementById('temporary-content');

const fetchTemplate = async () => {
  try {
    const response = await fetch('/HTML/general.html');
    if (!response.ok) {
      throw new Error('Error fetching data');
    } else {
      const data = await response.text();
      App.innerHTML = data;
      const contentTab = document.getElementById('content-tab');
      contentTab.innerHTML = temporaryContent.innerHTML;
      temporaryContent.innerHTML = null;
      inputFunction();
      showActiveNavLinksFunction();




      ///// animate the nav ankers   
      document.querySelector('a[href="#NewCar"]').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector('#NewCar').offsetTop,
          behavior:'smooth'
        })
      })


      document.querySelector('a[href="#TestDrive"]').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector('#TestDrive').offsetTop,
          behavior:'smooth'
        })
      })


      document.querySelector('a[href="#Services"]').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector('#Services').offsetTop,
          behavior:'smooth'
        })
      })


      document.querySelector('a[href="#Contact"]').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: document.querySelector('#Contact').offsetTop,
          behavior:'smooth'
        })
      })



      ////// for background tranlate
      const backGround = document.querySelector('.back-ground');
      const slideIn = () => {
        const backGroundTop = backGround.getBoundingClientRect().top;
        const screenHeight = window.innerHeight; 
        if (backGroundTop - screenHeight <= 0) {
          backGround.classList.add('active');
        } else {
          backGround.classList.remove('active');
        }
      };
      window.addEventListener('scroll', slideIn);
      slideIn();
      





      /// dor second slid translate 
      const SecondBackGround = document.querySelector('.tback-ground');
      const SecondSlidIn = () => {
        const SecondBackGroundTop = SecondBackGround.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (SecondBackGroundTop - screenHeight <= 0) {
          SecondBackGround.classList.add('active');
        } else {
          SecondBackGround.classList.remove('active');
        }
      }
      window.addEventListener('scroll', SecondSlidIn);
      SecondSlidIn();





      //// for contact section animation 
      const contactsection1 = document.querySelector('.contact-item1')
      const contactsection2 = document.querySelector('.contact-item2')

      const thirdslideIn = () => {
        const contactsection1Top = contactsection1.getBoundingClientRect().top;
        const contactsection2Top = contactsection2.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (contactsection1Top - screenHeight <= 0) {
          contactsection1.classList.add('active');
        } else {
          contactsection1.classList.remove('active');
        }
        if (contactsection2Top - screenHeight <= 0) {
          contactsection2.classList.add('active');
        } else {
          contactsection2.classList.remove('active');
        }
      }
      window.addEventListener('scroll', thirdslideIn);
      thirdslideIn();





      ////// for footer year 
      const footerYear = document.getElementById('footer-year');
      footerYear.innerHTML = new Date().getFullYear();




      ///// croll to top  
      const arrow = document.getElementById('scrollToTopBtn')
      arrow.style.display = 'none';
      const scrollUp = () => {
        scrollTo({top:0, behavior: 'smooth'})
      }
      scrollUp();

      const handelScroll = () => {
        if (window.scrollY > 100) {
          arrow.style.display = 'block';
        } else {
          arrow.style.display = 'none';
        }
      }
      
      window.addEventListener('scroll', handelScroll);
      arrow.addEventListener('click', scrollUp)
      handelScroll();



    }
  } catch (error) {
    console.error('Error:', error);
    templateApp.innerHTML = '<p>Error loading content. Please try again later.</p>';
  }
};

fetchTemplate();


