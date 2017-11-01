var timeline = new TimelineLite();
        timeline.add('frame1')
            .addDelay(2, 'frame2')
        timeline.add('frame2')
            .to('.wipe', 0.5, { width: 300 })
            .to('.wipe-line', 0.5, { left: 300 }, '-=0.5')
            .to('.wipe-line', 0.3, { left: 310 })
            .to('.background1', 0, { opacity: 0 })
            .addDelay(3, 'frame3')
        timeline.add('frame3')
            .to('.wipe', 1, { opacity: 0 }).add('frame3-logo')
            .to('.sprite1', 0.3, { top: 0 }).add('sprites')
            .to('.sprite2', 0.3, { top: 0 }, 'sprites+=0.15')
            .to('.sprite3', 0.3, { top: 0 }, 'sprites')
            .to('.sprite4', 0.3, { top: 0 }, 'sprites+=0.3')
            .addDelay(0.5, 'frame3-background')
            .to('.background3', 1, { opacity: 1 }).add('frame3-background')
            .addDelay(0.5, 'cta')
            .to('.cta', 1, { opacity: 1 }).add('cta')
        timeline.add('frame4')