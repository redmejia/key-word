import { SafeAreaView, StatusBar, StyleSheet} from "react-native";
import { KeyWord } from "./src/Screens/KeyWord";


const App = (): JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />
      <KeyWord />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000005',
  }
});

export default App;