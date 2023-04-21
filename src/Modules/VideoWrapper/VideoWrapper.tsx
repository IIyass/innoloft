import YouTubeVideo from '../../Components/YouTubeVideo/YouTubeVideo';
import Container from '../../Shared/Container';
import styles from './VideoWrapper.module.scss';

interface IVideWrapper {
  videoId: string | null;
}

const VideoWrapper = ({ videoId }: IVideWrapper) => {
  return videoId ? (
    <Container className="mb-6 p-4">
      <h1 className="text-xl ">Video</h1>
      <div className={styles.video_wrapper}>
        <YouTubeVideo videoId={videoId} className={styles.youtube_wrapper} />
      </div>
    </Container>
  ) : null;
};

export default VideoWrapper;
