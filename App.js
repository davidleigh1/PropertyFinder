'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Source: https://www.raywenderlich.com/247-react-native-tutorial-building-android-apps-with-javascript
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import SearchPage from "./SearchPage";
import SearchResults from "./SearchResults";
import PropertyView from './PropertyView';

const App = createStackNavigator({
    Home: { screen: SearchPage },
    Results: { screen: SearchResults },
    Property: { screen: PropertyView },
});

export default App;





// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
// class SearchPage extends Component<Props> {

    // render() {
    //     return (
    //     <View style={styles.container}>
    //         <Text style={styles.welcome}>Welcome to React Native!</Text>
    //         <Text style={styles.instructions}>To get started, edit App.js</Text>
    //         <Text style={styles.instructions}>{instructions}</Text>
    //     </View>
    //     );
    // }

    // static navigationOptions = {
    //     title: 'Property Finder',
    // };

//     render() {
//         // return React.createElement(Text, { style: styles.description }, "Search for houses to buy!");
//         return <Text style={styles.description}>
//             Search for houses to buy! (Again)
//           </Text>;
//     }
// }

// const styles = StyleSheet.create({
//     description: {
//         fontSize: 18,
//         textAlign: 'center',
//         color: '#656565',
//         marginTop: 65,
//     },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });