import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#282828',
    padding: 20,
    flex: 1,
  },
  recipeContainer: {
    display: 'flex',
    padding: 20,
  },
  recipeImage: {
    borderRadius: 25,
    width: 120,
    height: '50%',
  },
  recipeName: {
    fontSize: 24,
    color: 'white',
    paddingTop: 20,
  },
  search: {
    height: 40,
    padding: 10,
    backgroundColor: '#343435',
    color: 'white',
    margin: 10,
    borderRadius: 10,
  },
  cover: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  coverTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coverIcons: {
    flexDirection: 'row',
  },
  coverBottom: {
    
  },
  coverBottomFootext: {
    fontSize: 18,
    color: 'white',
  },
  coverBottomTitle: {
    fontSize: 24,
    color: 'white',
  },
  recipePage: {
    flex: 1,
    backgroundColor: '#282828',
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default styles;