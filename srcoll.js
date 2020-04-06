new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3'],
    navigationTooltips: ['Home', 'About Me', 'Contact'],
    showActiveTooltip: true,
    scrollingSpeed: 1100,

    onLeave: (origin, destination, direction) => {

    }
})