/*
{
  const menubtn = document.querySelector('.menu-btn'),
    menuOpen = document.getElementById('menu-overlay');

  menubtn.onclick = function() {
    menuOpen.style.display ='flex';
    menuOpen.classList.toggle('active');
    menubtn.classList.toggle('active');
  };

  window.addEventListener('click', function (e) {
    if (!menubtn.contains(e.target) && !menuOpen.contains(e.target)) {
      menuOpen.classList.remove('active');
      menuOpen.style.display ='none';
      menubtn.classList.remove('active');
    }
  });
}

*/
{
  const menubtn = document.querySelector('.menu-btn');
  const menuOpen = document.getElementById('menu-overlay');
  menubtn.addEventListener('click', () => {
    menuOpen.style.display = 'flex';
    menuOpen.classList.toggle('active');
    menubtn.classList.toggle('active');
  });
  window.addEventListener('click', function (e) {
    e.preventDefault();
    if (!menubtn.contains(e.target) && !menuOpen.contains(e.target) || e.target === menuOpen) {
      menuOpen.classList.remove('active');
      menuOpen.style.display = 'none';
      menubtn.classList.remove('active');
    }
  });
}
// scroll
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
//кнопка up
{
  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
      goTopBtn.classList.add('topButton__show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('topButton__show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  const goTopBtn = document.querySelector('.topButton');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
}
// slider
{
  class SlideShow {
    constructor(startIndex, element) {
      this.startIndex = startIndex;
      this.currentIndex = this.startIndex;
      this.element = element;
      this.slides = this.element.querySelectorAll('.slidershow__slide');
      this.setActiveSlide();
      this.next();
      this.prev();
    }

    setActiveSlide() {
      this.slides.forEach((item, index) => {
        if (index === this.currentIndex
        ) {
          item.classList.add('active');
        }
        else {
          item.classList.remove('active');
        }
      })
    }

    next() {
      let nextBtn = this.element.querySelector('[data-way="next"]');
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex === this.slides.length - 1
        ) {
          this.currentIndex = 0;
        }
        else {
          this.currentIndex++;
        }
        this.setActiveSlide();
      })
    }

    prev() {
      let prevBtn = this.element.querySelector('[data-way="prev"]');
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex === 0
        ) {
          this.currentIndex = this.slides.length - 1;
        }
        else {
          this.currentIndex--;
        }
        this.setActiveSlide();
      })
    }
  }

  let slideShow = document.querySelectorAll('.slidershow');
  slideShow.forEach(item => {
      new SlideShow(0, item)
    }
  )
};
