/**
 * A utility function to animate elements when they come into view
 * @param {HTMLElement} element - The DOM element to animate
 * @param {number} viewportOffset - Amount of element that must be visible before animating
 */
export const animateOnScroll = (element, viewportOffset = 150) => {
  const windowHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  
  if (elementTop < windowHeight - viewportOffset) {
    element.classList.add('active');
  } else {
    element.classList.remove('active');
  }
};

/**
 * A utility function to format date strings
 * @param {Date|string} date - Date to format
 * @param {Object} options - Formatting options
 * @returns {string} Formatted date
 */
export const formatDate = (date, options = {}) => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    ...options
  }).format(dateObj);
};

/**
 * A utility function to validate email addresses
 * @param {string} email - Email to validate
 * @returns {boolean} Whether the email is valid
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * A utility function to create typing animations
 * @param {HTMLElement} element - Element to type text into
 * @param {string} text - Text to type
 * @param {number} speed - Speed in milliseconds per character
 * @param {number} delay - Delay before typing starts
 */
export const typeWriter = (element, text, speed = 100, delay = 0) => {
  if (!element) return;
  
  let i = 0;
  element.textContent = "";
  
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  
  setTimeout(() => {
    type();
  }, delay);
};