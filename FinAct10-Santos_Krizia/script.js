let display = document.getElementById('display');
let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  display.value = currentExpression;
}

function appendOperator(operator) {
  currentExpression += operator;
  display.value = currentExpression;
}

function clearDisplay() {
  currentExpression = '';
  display.value = '';
}

function calculateResult() {
  try {
    let result = eval(currentExpression);
    display.value = result;
    currentExpression = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function changeBackgroundImage() {
  let body = document.body;
  let randomImage = getRandomImage();
  body.style.backgroundImage = `url('${randomImage}')`;
}
function getRandomImage() {
    // Array of background image URLs
    let images = [
      'https://e1.pxfuel.com/desktop-wallpaper/183/423/desktop-wallpaper-mystical-stylised-lonely-mountain-vista-1920x1200-mystical-moonlight.jpg', // Replace with your image URL
      'https://wallpaper.dog/large/238738.png', // Replace with your image URL
      'https://e1.pxfuel.com/desktop-wallpaper/768/284/desktop-wallpaper-pastel-purple-computer-light-purple-aesthetic-pc.jpg', // Replace with your image URL
      'https://wallpapercave.com/wp/wp7952670.jpg',
      'https://static.vecteezy.com/system/resources/previews/009/925/006/original/cute-purple-aesthetic-abstract-minimal-background-perfect-for-wallpaper-backdrop-postcard-background-vector.jpg'
      // Add more image URLs here
    ];
    // Get a random index
    let randomIndex = Math.floor(Math.random() * images.length);
    // Return the randomly selected image URL
    return images[randomIndex];
  }
  