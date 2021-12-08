import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#282828',
    padding: 20,
    flex: 1,
  },
  recipeContainer: {
    display: 'flex',
    width: 'auto',
    padding: 10,
  },
  recipeImage: {
    borderRadius: 15,
    width: 120,
    height: 120,
  },
  recipeName: {
    fontSize: 14,
    color: 'white',
    paddingTop: 5,
    paddingHorizontal: 5,
    width: 130,
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
    padding: 20,
  },
  coverTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coverIcons: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  coverBottom: {},
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
  recipesHeaderType: {
    fontSize: 24,
    color: 'red',
  },
  size: {
    borderRadius: 15,
    width: 150,
    height: 150,
    padding: 10,
  },
  searchInput: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchInputIcons: {
    justifySelf: 'flex-end',
  },
  inputSearchIcon: {
    marginLeft: 10,
  },
  separateFlatList: {
    height: 1,
    backgroundColor: 'grey',
  },
  opacityCover: {
    opacity: 0.4,
  },
});

export default styles;
