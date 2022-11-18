import {StyleSheet} from 'react-native';
import {W, H} from '../../utils/ui/dimension';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 12,
  },
  contentCol: {
    alignSelf: 'center',
  },
  musicbox: {
    width: W(90),
    height: 200,
    backgroundColor: 'lightgreen',
    borderRadius: 35,
    justifyContent: 'center',
  },
  musictext: {
    color: 'grey',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '400',
  },
  list: {
    width: W(85),
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    width: 80,
    height: 80,
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  box2: {
    width: W(90),
    height: 150,
    borderRadius: 24,
    marginTop: 24,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 32,
  },
  textarea: {
    width: '50%',
  },
  textarearight: {
    alignSelf: 'flex-end',
    width: '50%',
  },
  text: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'Times New Roman',
    fontWeight: '300',
  },
  miniText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '100',
    marginTop: 6,
  },
  header: {
    paddingVertical: 24,
    paddingStart: 12,
  },
  button: {
    borderRadius: 10,
    width: W(35),
    padding: 8,
    backgroundColor: 'lightblue',
    marginTop: 20,
  },
  buttonDel: {
    position: 'absolute',
    bottom: H(22),
    left: W(10),
    borderRadius: 100,
    padding: 20,
    backgroundColor: 'red',
  },
});

export {styles};
