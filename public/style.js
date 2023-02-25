new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,
    navigationTooltips: ["home", "about", "contact"],
    verticalCentered: true,
});

anime({
    targets: '#hello path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 5000,
    direction: 'alternate',
    loop: true
  });