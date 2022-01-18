import { useState } from 'react';
import { StatusBar, StyleSheet, View, Modal } from 'react-native';
import Header from './src/components/Header';
import SearchForm from './src/components/SearchForm';
import Button from './src/components/Button';
import Joke from './src/components/Joke';
import CategoryCard from './src/components/CategoryCard';

const App = () => {
  const [joke, setJoke] = useState(null);
  const [category, setCategory] = useState('Any');
  const [searchValue, setSearchValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const fetchJoke = async () => {
    const response = await fetch(
      `https://v2.jokeapi.dev/joke/${category}?type=single&contains=${searchValue}`
    );
    const responseJSON = await response.json();
    setJoke(responseJSON.joke);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setJoke(null);
    setModalVisible(!modalVisible);
  };

  const handleSearchSubmit = () => {
    setCategory('Any');
    fetchJoke();
    setSearchValue('');
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchForm
        searchValue={searchValue}
        onSetSearchValue={setSearchValue}
        onSubmit={handleSearchSubmit}
      />
      <Joke joke={joke} category={category} />
      <Button text={'Generate Joke'} onPress={() => fetchJoke()} />
      <Button text={'Select Category'} onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <CategoryCard
            category={'Random'}
            onPress={() => handleCategoryChange('Any')}
          />
          <CategoryCard
            category={'Programming'}
            onPress={() => handleCategoryChange('Programming')}
          />
          <CategoryCard
            category={'Misc'}
            onPress={() => handleCategoryChange('Misc')}
          />
          <CategoryCard
            category={'Dark'}
            onPress={() => handleCategoryChange('Dark')}
          />
          <Button
            text={'Back'}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
});

export default App;
