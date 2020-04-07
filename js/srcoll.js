new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    anchors: ['section1', 'section2', 'section3'],
    navigationTooltips: ['Home', 'About Me', 'Contact'],
    showActiveTooltip: true,
    scrollingSpeed: 1100,

    onLeave: (origin, destination, direction) => { 
        const section = destination.item;
        //console.log(destination);
        const title = section.querySelector("h1");
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title, 0.5, { x: -50 , opacity: 0}, {x: 0, opacity: 1});

        if(destination.index === 0){
            const tuine = document.querySelector('.portrait');
            const tiltene = document.querySelector('.Title_under_name')
            const tiltenuane = document.querySelector('.Title_under2_name')
            tl.fromTo(tuine, 0.4, {y: "-10", opacity: 0}, {y: 0, opacity: 1});
            tl.fromTo(tiltene, 0.4, {y: "-360", opacity: 0}, {y: "-365", opacity: 1});
            tl.fromTo(tiltenuane, 0.4, {y: "-355", opacity: 0}, {y: "-347", opacity: 1});

        }

        if(destination.index===1){
            const textne = document.querySelector('.textne');
            const ctnne = document.querySelector('.ctn-ShowMemore')
            //const strtext = textne.textContent;
            //function animate(){
            //    if(strtext.length>0){
            //        container.innerHTML+=textne;
            //    }
            //}
            const boder1 = document.querySelector('.borders');
            const boder2 = document.querySelector('.borderletter');
            tl.fromTo(boder1, 0.2, { x: 50 , opacity: 0}, {x: 0, opacity: 1});
            tl.fromTo(boder2, 0.2, { x: -50 , opacity: 0}, {x: 0, opacity: 1});
            tl.fromTo(textne, 0.4, { x: -50 , opacity: 0}, {x: 0, opacity: 1});
            tl.fromTo(ctnne, 0.4, { y: -10 , opacity: 0}, {y: 0, opacity: 1});
        }

        if(destination.index===2){
            const gmailne = document.querySelector('.mailne');
            const behancene = document.querySelector('.behance');
            
            const boder3 = document.querySelector('.borders2');
            const boder4 = document.querySelector('.borderletter2');
            tl.fromTo(boder3, 0.2, { x: 50 , opacity: 0}, {x: 0, opacity: 1});
            tl.fromTo(boder4, 0.2, { x: -50 , opacity: 0}, {x: 0, opacity: 1});

            tl.fromTo(gmailne, 0.4, { x:"10" , opacity: 0}, {x: 0, opacity: 1});
            tl.fromTo(behancene, 0.3, { x:"10" , opacity: 0}, {x: 0, opacity: 1});
        }
    }
})