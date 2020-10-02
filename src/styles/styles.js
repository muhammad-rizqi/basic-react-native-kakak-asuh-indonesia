import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  appBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285f4',
  },
  appBarText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  appIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
    marginHorizontal: 8,
  },
  scrollMenu: {
    padding: 8,
  },
  scrollItem: {
    width: 100,
    height: 100,
    backgroundColor: '#4285f4',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  itemIcon: {tintColor: '#eaeaea', height: 42, width: 42, margin: 4},
  scrollItemText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eaeaea',
  },
  scrollItemTitle: {
    textAlign: 'center',
    color: '#eaeaea',
  },
  menuContainer: {
    padding: 16,
  },
  menuTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  menuList: {
    borderRadius: 15,
    backgroundColor: '#4285f4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  menuListItem: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageItem: {resizeMode: 'contain', height: 250, width: 300},
  imageScroll: {
    resizeMode: 'contain',
    height: 350,
    width: 800,
  },
});
