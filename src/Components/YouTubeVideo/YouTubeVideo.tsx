import YouTube from 'react-youtube';

interface IYouTubeVideo {
  className: string;
  videoId: string;
}

const YouTubeVideo = ({ className, videoId }: IYouTubeVideo) => {
  // const videoId = 'dQw4w9WgXcQ';
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube className={className} videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
