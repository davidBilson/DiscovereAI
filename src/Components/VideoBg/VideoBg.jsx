import style from './VideoBg.module.css'
import ReactPlayer from 'react-player'
import Video from '../../assets/video.mp4'

const VideoBg = () => {
  return (
    <div className={style.videoPlayerBg}>
        <ReactPlayer
            url={Video}
            loop={true}
            muted
            playing
            width={'100%'}
            height={'100%'}
            controls={false}
            stopOnUnmount={false}
         />
  
      <video controls>
          <source src="path/to/video.mp4" type="video/mp4" />
          <source src="path/to/video.webm" type="video/webm" />
          Your browser does not support the video tag.
      </video>

    </div>
  )
}

export default VideoBg