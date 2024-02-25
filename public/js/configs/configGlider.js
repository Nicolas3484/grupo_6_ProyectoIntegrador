new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1.5,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 368px
        breakpoint: 368,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: '2.5',
          slidesToScroll: '1.5',
          itemWidth: 150,
          duration: 0.25,
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          },
        }
      },{
        // screens greater than >= 769px
        breakpoint: 769,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1.5,
          itemWidth: 150,
          duration: 0.25,
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          },
        }
      }
    ]
  });