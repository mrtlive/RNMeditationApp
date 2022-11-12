import {StyleSheet} from 'react-native';
import {H, W} from '../../utils/ui/dimension';

const styles = StyleSheet.create({
  keyboards: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  box: {
    width: W(100),
    height: H(25),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: H(2),
  },
  lottie: {
    width: '100%',
    height: '100%',
    top: H(-10),
    left: -10,
  },
  input: {
    width: W(70),
    alignSelf: 'center',
    padding: 12,
    caretColor: 'transparent',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'lightgrey',
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'lightblue',
    marginTop: 12,
    width: W(40),
    alignSelf: 'center',
    borderRadius: 12,
    padding: 12,
  },
});

export {styles};
