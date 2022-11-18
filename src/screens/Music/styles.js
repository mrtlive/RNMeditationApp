import {StyleSheet} from 'react-native';
import {W, H} from '../../utils/ui/dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    padding: 12,
    borderRadius: 12,
    margin: 12,
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
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCol: {
    width: W(100),
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // styling the image
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  box2: {
    width: W(90),
    height: 150,
    borderRadius: 24,
    marginTop: 24,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 28,
    marginStart: 18,
    color: 'white',
    fontFamily: 'Times New Roman',
    fontWeight: '300',
  },

  button: {
    borderRadius: 10,
    width: W(20),
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export {styles};
