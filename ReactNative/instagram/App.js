import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import { View, Text } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCr6OLHE24P-HTPIuAs5dlV2UuZqT8lBIs',
	authDomain: 'instagram-dev-b85d8.firebaseapp.com',
	projectId: 'instagram-dev-b85d8',
	storageBucket: 'instagram-dev-b85d8.appspot.com',
	messagingSenderId: '508157531440',
	appId: '1:508157531440:web:730c45f2c18781658964f5',
	measurementId: 'G-BNHVEVC7JW'
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import MainScreen from './components/Main';
import AddScreen from './components/main/Add';
import SaveScreen from './components/main/Save';

const Stack = createStackNavigator();

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				this.setState({
					loggedIn: false,
					loaded: true
				});
			} else {
				this.setState({
					loggedIn: true,
					loaded: true
				});
			}
		});
	}
	render() {
		const { loggedIn, loaded } = this.state;
		if (!loaded) {
			return (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<Text>Loading</Text>
				</View>
			);
		}

		if (!loggedIn) {
			return (
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Landing">
						<Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
						<Stack.Screen name="Register" component={RegisterScreen} />
						<Stack.Screen name="Login" component={LoginScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			);
		}

		return (
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Main">
						<Stack.Screen name="Main" component={MainScreen} />
						<Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation} />
						<Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		);
	}
}

export default App;
