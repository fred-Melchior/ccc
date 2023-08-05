import { VideoDiv } from './styles'

const Videos = () => {
  return (
    <VideoDiv>
      <div className="container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ArFbR6-wKSI?autoplay=1"
          allowFullScreen
        ></iframe>
      </div>
    </VideoDiv>
  )
}

export default Videos
