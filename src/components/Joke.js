import { View, Text, StyleSheet } from 'react-native';

const Joke = ({ joke, category }) => (
  <View style={styles.joke}>
    <Text tyle={styles.jokeCategory}>
      Category: {category === 'Any' ? 'Random' : category}
    </Text>
    <Text style={styles.jokeText}>
      {joke === null
        ? 'Click button below to see a joke'
        : joke === undefined
        ? 'No results... Try again.'
        : joke}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  joke: {
    flex: 1,
    minHeight: 150,
    paddingHorizontal: 35,
  },
  jokeCategory: {
    fontSize: 22,
    color: 'pink',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  jokeText: {
    fontSize: 16,
    lineHeight: 30,
    letterSpacing: 0.25,
  },
});

export default Joke;
