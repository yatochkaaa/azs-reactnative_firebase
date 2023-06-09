const black = '#303030';
const shadowColor = '#262626';
const white = '#fff';
const emerald = '#00b488';
const MusticaPro = 'MusticaPro-SemiBold';
const Intro = 'Intro';

export default {
  colors: {
    black,
    emerald,
    white,
    lightgray: '#fcfffe',
  },
  fontFamily: {
    MusticaPro,
    Intro,
  },
  menuText: {
    fontFamily: MusticaPro,
    fontSize: 18,
    color: white,
    letterSpacing: 0.4,
  },
  smallText: {
    fontFamily: MusticaPro,
    color: black,
    fontSize: 12,
  },
  text: {
    fontFamily: MusticaPro,
    color: black,
    fontSize: 14,
    letterSpacing: 0.4,
  },
  largeText: {
    fontFamily: MusticaPro,
    color: black,
    fontSize: 18,
    letterSpacing: 0.4,
  },
  shadowProps: {
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 2,
  },
  border: {
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: white,
  },
  button: {
    width: '100%',
    backgroundColor: emerald,
    padding: 16,
    borderRadius: 15,
  },
  buttonText: {
    fontFamily: MusticaPro,
    fontSize: 18,
    color: white,
    letterSpacing: 0.4,
  },
  buttonLargeText: {
    fontFamily: Intro,
    fontSize: 16,
    color: white,
  },
};
