import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { imageURL } from '../../constants/constants';


const VideoPlayer = (props) => {

  const [isOpen, setOpen] = useState(false);
  const { videoId, image, basePath, videoCoverImage } = props;
  const text = "PLAY";
  let imageSrc = 'school-sec-4-img-1.jpg'
  if(image){
    imageSrc = image;
  }
  return (
    <>
      <div onClick={() => setOpen(true)} className="card img-card img-card-1">
        <div>
          {!videoCoverImage ? <img src={`${basePath ? basePath : imageURL}${imageSrc}`} className="w-100" alt="img" loading="lazy"/> :
            <img src={videoCoverImage} className="w-100" alt="img" loading="lazy"/>
          }
          <p className="zvideo-play">
            <span className="zvideoplay-icon">
              <span className="zplay-text">{text}</span>
            </span>
          </p>
        </div>
      </div>
      <ModalVideo ratio={'20:11'} width={100} allowFullScreen={true} channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
    </>
  )
}

export default VideoPlayer;