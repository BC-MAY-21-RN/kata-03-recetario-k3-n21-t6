import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#282828',
    padding: 20,
    flex: 1,
  },
  recipeContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  recipeImage: {
    borderRadius: 25,
    width: 120,
    height: 120,
  },
  recipeName: {
    fontSize: 24,
    color: 'white',
    paddingTop: 20,
  },
  search: {
    width: '95%',
    height: 40,
    padding: 10,
    backgroundColor: '#343435',
    color: 'white',
    margin: 10,
    borderRadius: 10,
  },
  cover: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '40%',
  },
  coverThumbnail: {
    flex: 1,
  },
  coverTop: {
    justifySelf: 'flex-start',
  },
  coverBottom: {
    justifySelf: 'flex-end',
  },
  coverBottomFootext: {
    fontSize: 18,
    color: 'white',
  },
  coverBottomTitle: {
    fontSize: 24,
    color: 'white',
  },
});

export default styles;