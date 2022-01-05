import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Pressable } from 'react-native';
import SearchForm from './src/components/SearchForm';

export default function App() {
  const [joke, setJoke] = useState(null);

  const getJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const responseJSON = await response.json();
    setJoke(responseJSON.joke);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Jokes Generator</Text>
      </View>
      <SearchForm />
      <View style={styles.joke}>
        <Text style={styles.jokeText}>
          {joke === null ? 'Click button below to see a joke' : joke}
        </Text>
      </View>
      <Pressable style={styles.button} onPress={() => getJoke()}>
        <Text style={styles.buttonText}>Get Joke</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight,
  },
  header: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#841584',
    borderRadius: 2,
    elevation: 3,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  joke: {
    flex: 1,
    minHeight: 150,
    paddingHorizontal: 35,
  },
  jokeText: {
    fontSize: 16,
    lineHeight: 30,
    letterSpacing: 0.25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#841584',
    color: '#fff',
    marginVertical: 20,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});
