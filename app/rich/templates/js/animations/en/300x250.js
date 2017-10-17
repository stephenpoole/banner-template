var easeIn = Power1.easeIn;
var easeOut = Power1.easeOut;
var timeline = new TimelineLite({onComplete: onComplete});
        timeline.add('frame1')
        timeline.add('frame1')
             .to('.copy1', 2, {opacity: 1})
            .addDelay(1.5, 'frame2')
        timeline.add('frame2')
            .to('.copy1, .background1', 1, {opacity: 0})
            .to('.masks .mask1, .masks .mask2, .masks .mask3', 0.1, {opacity: 1})
            .to('.copy2', 0.1, {opacity: 1})
            .addDelay(2, 'frame3')
        timeline.add('frame3')
            .to('.masks .mask1', 2, {left: 270}, '-=1')
            .to('.masks .mask2', 2.1, {left: 270}, '-=1')
            .to('.masks .mask3', 2.1, {left: 270}, '-=0.8')
            .to('.logo', 1, {opacity: 1})
            .addDelay(2, 'frame4')
        timeline.add('frame4')     
            .to('.logo', 1, {top: -30})
            .to('.copy2', 1, {top: -30},'-=1')
            .to('.cta', 1, {opacity: 1})  
        timeline.add('frame5')

