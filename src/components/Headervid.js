import React from 'react';

const HeaderVid = () => {

    return (
        <header>
    
            <div class="overlay"></div>

            <video width="100%" controls muted  preload="auto" controls id="idvideo">
                <source type="video/mp4" src="headervid.mp4" autoplay/>
            </video>


        </header>
    )
}

export default HeaderVid;