import Img1 from '../../images/svg-1.svg'
import Img2 from '../../images/svg-2.svg'
import Img3 from '../../images/svg-3.svg'

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
  headline: 'Login to your account at any time',
  description:
    "With our amazing online services, you don't have to worry ever again about going to the bank.",
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
    'Not only we offer the best online services, but as our customer you will have global support thanks to our international partnerships.',
  buttonLabel: 'Sign Up',
  imgStart: false,
  img: Img3,
  alt: 'Global Presence',
  dark: false,
  primary: false,
  darkText: true,
}
