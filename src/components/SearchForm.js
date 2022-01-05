import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const SearchForm = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search joke by word"
        value={''}
        onChangeText={() => console.log('works')}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => console.log('searching...')}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  searchInput: {
    height: '100%',
    width: '85%',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 20,
    color: '#000',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchForm;
