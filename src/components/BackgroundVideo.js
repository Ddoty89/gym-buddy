import React from 'react';
import Youtube from 'react-youtube';

import './BackgroundVideo.css';

class BackgroundVideo extends React.Component {
	render() {
		const opts = {
			playerVars: {
				autoplay: 1,
				loop: 1,
				controls: 0
			}
		};

		return (
			<Youtube
				className='backgroundVideo'
            	videoId='C6mnw1lMGOY'
            	opts={opts}
            />		
        )
    }
}

export default BackgroundVideo