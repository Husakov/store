import React,{Component} from 'react';
import ReactPlayer from 'react-player';



class VideoView extends Component {

    render(){
        return(
            <div>

                <ReactPlayer url='https://www.dailymotion.com/video/x5ae5p8' playing />
            </div>
        );
    }

}

export default VideoView;