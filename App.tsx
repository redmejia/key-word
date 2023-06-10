import { Platform, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import { KeyWord } from "./src/Screens/KeyWord";


const App = (): JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#000"
        barStyle={Platform.OS === 'ios' ? 'dark-content': 'light-content'}
      />
      <KeyWord />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#DAE7F9'
    // backgroundColor : '#000'
  }
});

export default App;