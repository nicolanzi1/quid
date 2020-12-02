import Img1 from '../../images/svg-1.svg'
import Img2 from '../../images/svg-2.svg'
import Img3 from '../../images/svg-3.svg'
import Img4 from '../../images/svg-4.svg'
import Img5 from '../../images/svg-5.svg'
import Img6 from '../../images/svg-6.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: Img1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Check your online account whenever you want',
  description:
    "With our amazing online service, you don't have to worry ever again about going to the bank.",
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Img2,
  alt: 'Online Presence',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Global Presence',
  headline: 'Your Bank anywhere, everywhere',
  description:
    'Not only we offer the best online service, but as our customer you will have global support thanks to our international partnerships.',
  buttonLabel: 'Sign Up',
  imgStart: false,
  img: Img3,
  alt: 'Global Presence',
  dark: false,
  primary: false,
  darkText: true,
}
