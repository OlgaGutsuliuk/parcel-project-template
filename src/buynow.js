(() => {
    const refs = {
      openbuynowBtn: document.querySelector('[data-buy-now-open]'),
      closebuynowBtn: document.querySelector('[data-buy-now-close]'),
      buynow: document.querySelector('[data-buy-now]'),
    };
  
    refs.openbuynowBtn.addEventListener('click', togglebuynow);
    refs.closebuynowBtn.addEventListener('click', togglebuynow);
  
    function togglebuynow() {
      refs.buynow.classList.toggle('is-hiddenn');
    }
  })();