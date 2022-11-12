import {StyleSheet} from 'react-native';
import {W, H} from '../../utils/ui/dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    padding: 12,
    borderRadius: 12,
    margin: 12,
  },
  contentCol: {
    alignSelf: 'center',
  },
  screen: {
    marginVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // styling the image
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  header: {
    paddingVertical: 24,
    paddingHorizontal: 24,
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
    fontSize: 32,
    color: 'white',
    fontFamily: 'Times New Roman',
    fontWeight: '300',
  },

  button: {
    borderRadius: 10,
    width: W(30),
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export {styles};
