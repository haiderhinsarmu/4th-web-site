import { morePicture } from '../Array/morePicture.js';
import { inputFunction, showActiveNavLinksFunction } from './general.js';

const app = document.getElementById('morePictureApp');
const temporary = document.getElementById('morepictureTemporariy');

// Function to fetch data
const fetchTemplate = async () => {
  try {
    const res = await fetch('/HTML/general.html');
    if (!res.ok) {
      throw new Error('Error fetching data');
    } else {
      const data = await res.text();
      app.innerHTML = data;
      const contentTab = document.getElementById('content-tab');
      contentTab.innerHTML = temporary.innerHTML;
      temporary.innerHTML = null;
      inputFunction();
      showActiveNavLinksFunction();



      // Display pictures from array in combiner
      const picturecontainer = document.querySelector('.imgs');
      const displayPicture = () => {
        let displayPictures = morePicture.map((picture) => {
          return `<img src="${picture.img}" alt="${picture}">`;
        }).join("");
        picturecontainer.innerHTML = displayPictures;
      };
      displayPicture();



      // Display picture in bigger screen
      const imags = document.querySelectorAll('.imgs img');
      const screen = document.getElementById('screen');

      const displayImageInBiggerScreen = () => {
        imags.forEach((img) => {
          img.addEventListener('click', () => {
            screen.src = img.src;
          });
        });
      };
      displayImageInBiggerScreen();



      // Sliding imgs container
      const imgsContainer = document.querySelector('.imgs'); 
      const icons = document.querySelectorAll('.material-symbols-outlined');


      // Slide imgs container with arrow icons
        icons.forEach((icon) => {
          icon.addEventListener('click', () => { 
            const direction = icon.id === 'prev' ? -1 : 1
            const scrollAmount = imgsContainer.clientWidth * direction;
            imgsContainer.scrollBy({left: scrollAmount, behavior: 'smooth'})
            
            // hide arrow if it reaches the end of the container
            if (imgsContainer.scrollLeft === 0) {
              document.getElementById('prev').style.display = 'none';
            } else {
              document.getElementById('prev').style.display = 'block';
            }
            if (imgsContainer.scrollLeft + imgsContainer.clientWidth >= imgsContainer.scrollWidth) {
              document.getElementById('next').style.display = 'none';
            } else {
              document.getElementById('next').style.display = 'block';
            }
          });
        });

        /// hide nav links in more picture page 
        const header = document.querySelector('.header-container')
        header.style.display = 'none';
    }
  } catch (error) {
    console.error('Error:', error);
    temporary.innerHTML = '<p>Error loading content. Please try again later.</p>';
  }
};

fetchTemplate();
