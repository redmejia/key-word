import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { KeyWord } from "./src/Screens/KeyWord";
import { Slide } from "./src/Screens/SlideShow";
import { useContext, useState } from "react";
import { ModeButton } from "./src/Components/ModeButton/ModeButton";
import { Divider } from "./src/Components/Divider/Divider";
import { ThemeContext,  ThemeProvider } from "./src/context/ThemeContext/ThemeContext";
import { ServiceDown } from "./src/Screens/ServiceDown";

const Main = (): JSX.Element => {

	const [changeScreen, setChangeScreen] = useState<boolean>(false);

	const [navChar, setNavChar] = useState<string>("Next")

	const { setLightTheme, setDarkTheme, theme} = useContext(ThemeContext) 

	
	return (
		<SafeAreaView style={{
			...styles.container,
			backgroundColor : theme.background
			}}>
			<StatusBar
				backgroundColor="#000"
				barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
			/>
			<View style={styles.btnContainer}>
				<ModeButton
					modeBtnName={navChar}
					modeContainerBtnStyle={styles.btnContainerNav}
					modeBtnStyle={{
						// borderRadius: 100,
						width: 60,
						height: 20,
						backgroundColor: theme.background
					}}
					modeTextStyle={{ color: theme.text, fontWeight: '900',  }}

					action={() => {
						if (changeScreen) {
							setNavChar('Next')
							setChangeScreen(false)
						} else {
							setNavChar('Back')
							setChangeScreen(true)
						}
					}}
				/>
				<View
					style={{ flexDirection: 'row' }}
				>
					<ModeButton
						modeContainerBtnStyle={styles.btnLight}
						modeBtnStyle={{
							// borderRadius: 10,
							width: 60,
							height: 20,
							backgroundColor: '#F08D5A'
						}}
						action={setLightTheme}
					/>
					<Divider dividerStyle={{ marginHorizontal: 2 }} />
					<ModeButton
						modeContainerBtnStyle={styles.btnDark}
						modeBtnStyle={{
							// borderRadius: 100,
							width: 60,
							height: 20,
							backgroundColor: '#26A4E1'
						}}
						action={setDarkTheme}
					/>
				</View>
			</View>
			{
				changeScreen
					? <KeyWord />
					// : <Slide />
					:<ServiceDown />
			}
		</SafeAreaView>
	);

}

const App = (): JSX.Element => {

	return (
		<ThemeProvider>
			<ServiceDown />
		</ThemeProvider>
	)

};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	btnContainer: {
		flexDirection: 'row',
		marginHorizontal: 6,
		top: 10,
		justifyContent: 'space-between'
	},
	btnContainerNav: {
		backgroundColor: '#7FA6F2',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		width: 70,
		height: 25,
	},
	btnLight: {
		backgroundColor: '#F14705',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		width: 70,
		height: 25
		// height: 50,
	},
	btnDark: {
		backgroundColor: '#092C3C',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		width: 70,
		height: 25,
	}
});

export default App;