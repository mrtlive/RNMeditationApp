import {StyleSheet} from 'react-native';
import {H, W} from '../../utils/ui/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededed',
    padding: 12,
  },
  input: {
    width: W(60),
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
    backgroundColor: 'lightgreen',
    marginTop: 24,
    width: W(40),
    alignSelf: 'center',
    borderRadius: 12,
    padding: 18,
  },
});

export {styles};
