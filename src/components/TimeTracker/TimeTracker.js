import React from 'react';

function TimeTracker() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    let img
    const backgroundImgArr = [
        'https://res.cloudinary.com/duprwuo4j/image/upload/v1578350863/imgs_starwars/imgs/morning_nubtjj.gif',
        'https://res.cloudinary.com/duprwuo4j/image/upload/v1578350973/imgs_starwars/imgs/ezgif.com-video-to-gif_2_fiy8bh.gif',
        'https://res.cloudinary.com/duprwuo4j/image/upload/v1578351044/imgs_starwars/imgs/ezgif.com-video-to-gif_3_dwxv1o.gif'
    ]


    if (hours < 12) {
        timeOfDay = "morning"
        img = backgroundImgArr[0]

    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        img = backgroundImgArr[1]
    } else {
        timeOfDay = "night"
        img = backgroundImgArr[2]
    }

    return (
        <div className="container">
            <div>
                <h2>Good {timeOfDay}</h2>
                <img src={img}
                    alt={timeOfDay} />
            </div>
        </div>
    )
}


export default TimeTracker