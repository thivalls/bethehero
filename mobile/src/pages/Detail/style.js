import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  page: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 24,
  },

  header: {
    paddingTop: Constants.statusBarHeight + 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 15,
    paddingHorizontal: 24
  },

  incident: {
    padding:24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 28
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },

  viewGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  contactBox: {
    padding:24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 0,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 20,
    textAlign: 'center'
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: -5,
    marginBottom: 10,
    textAlign: 'center'
  },

  actions: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})
