import * as Styled from './styled'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './styles.css'

import FirstImage from '../../assets/slide/03.png';
import SecondImage from '../../assets/slide/02.png';
import ThirdImage from '../../assets/slide/03.png';

const indicators = (index) => (<div className="indicator"></div>);

const fadeImages = [
  {
    url: FirstImage,
    caption: 'First Slide'
  },
  {
    url: SecondImage,
    caption: 'Second Slide'
  },
  {
    url: ThirdImage,
    caption: 'Third Slide'
  },
];


export default function Emphasis() {
  return (
    <Styled.Container>
      <Styled.SlideShow>
        <Fade indicators={indicators} pauseOnHover arrows={false}>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: '100%' }} src={fadeImage.url} />
            </div>
          ))}
        </Fade>
      </Styled.SlideShow>
    </Styled.Container >
  )
}