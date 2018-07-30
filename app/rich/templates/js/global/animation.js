var repeatCount = 0;
var repeatTotal = 1;
var timeline = new TimelineMax({repeat: repeatTotal});

timeline
    .pause()
    .add('frame1')
    .add(Background.slideDown.bind(Background, 1))
    .to('.copy1', 1.1, {opacity: 1})
    .addDelay(3, 'frame2');
timeline
    .add('frame2')
    .add(Background.slideUp.bind(Background, 1))
    .to('.copy1', 1.1, {opacity: 0})
    .add(Background.slideDown.bind(Background, 1))
    .to('.copy2,.details,.legal-trigger', 1, {opacity: 1})
    .to('.cta', 1, {opacity: 1})
    .addDelay(5, 'frame3')
    .add(function() {
        if (repeatCount++ >= repeatTotal) {
            timeline.pause();
        }
    });
timeline
    .add('frame3')
    .add(Background.slideUp.bind(Background, 1.5))
    .to('.cta,.details,.copy2,.legal-trigger', 1, {opacity: 0})
    .addDelay(0.5, 'frame4');
timeline.add('frame4');