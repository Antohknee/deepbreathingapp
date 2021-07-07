import 'react-native-gesture-handler'
import 'react-navigation'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    ScrollView,
    AppRegistry,
    Animated,
    Linking,
} from 'react-native';
import { Slider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import{ createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import MainScreen from './App/screens/MainScreen'
// import PanicScreen from './App/screens/PanicScreen'
// import FocusScreen from './App/screens/FocusScreen'
// import StressScreen from './App/screens/StressScreen'
// import TestingWaves from './App/screens/TestingWaves'
// import InformationScreen from './App/screens/InformationScreen'
// import ResourcesScreen from './App/screens/ResourcesScreen'

// const Navigator = createStackNavigator({
//   MainScreen: {screen: MainScreen},
//   PanicScreen: {screen: PanicScreen},
//   FocusScreen: {screen: FocusScreen},
//   StressScreen: {screen: StressScreen},
//   TestingWaves: {screen: TestingWaves},
//   InformationScreen: {screen: InformationScreen},
//   ResourcesScreen: {screen: ResourcesScreen},
// });

// const App = createAppContainer(Navigator);

function MainScreen({ navigation }) {
    return (
        <View style={MainScreenStyles.mainStyle} >
            <View style={MainScreenStyles.topSelections}>
                <View style={MainScreenStyles.resourcesStyle}>
                    <Text onPress={() => navigation.navigate('ResourcesScreen')}>Resources</Text>
                </View>
                <View style={MainScreenStyles.informationStyle} >
                    <Text onPress={() => navigation.navigate('InformationScreen')}>Information</Text>
                </View>
            </View>
            <View style={MainScreenStyles.titleText}>
                <Text style={MainScreenStyles.textStyle}>Main Page</Text>
                <Text style={MainScreenStyles.sinWavesStyle} onPress={() => navigation.navigate('TestingWaves', { value: 2 })}>Sin Waves</Text>
            </View>
            <View style={MainScreenStyles.buttonsBack}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('PanicScreen')}>
                    <View style={MainScreenStyles.buttonPanic}>
                        <Text style={MainScreenStyles.buttonText}>Panic Button</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={MainScreenStyles.bottomButtons}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('FocusScreen')}>
                        <View style={MainScreenStyles.buttonFocus}>
                            <Text style={MainScreenStyles.buttonText}>Focus Button</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('StressScreen')}>
                        <View style={MainScreenStyles.buttonStress}>
                            <Text style={MainScreenStyles.buttonText}>Stress Button</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
}

function FocusScreen({ navigation }) {
    return (
        <View style={FocusScreenStyles.main} >
            <Text style={FocusScreenStyles.text}>Focus Screen</Text>
            <Text style={FocusScreenStyles.text} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
        </View>
    );
}

function InformationScreen({ navigation }) {
    return (
        <View style={InformationScreenStyles.main}>
            <ScrollView style={InformationScreenStyles.scrollView}>
                <View style={InformationScreenStyles.titleBox}>
                    <Text style={InformationScreenStyles.hiddenText}>Return to main</Text>
                    <Text style={InformationScreenStyles.title}>Information</Text>
                    <Text style={InformationScreenStyles.return} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
                </View>
                <View style={InformationScreenStyles.paragraph}>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>Thank you for your interest in Waterloo Deep Breathing! This application was developed in partnership with the University of Waterloo Faculty of Engineering IDEAs Clinic, SHEN Spiritual Heritage Education Network, and the University of Waterloo Engineering Wellness (ENGWellness) Program.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>The purpose of this application is to aid individuals with reducing their stress response (deactivating the Sympathetic Nervous System (SNS)) through various deep breathing exercises in an effort to elicit a relaxation response (activating the Parasympathetic Nervous System (PSNS)). Research has readily proven that breathing exercises can effectively help individuals reduce their physiological response to stress and stressful stimuli. </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText}>Users can choose from three main options, each with different functionality and preferences: </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Focus:</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Focus Mode allows users to select from preset breathing techniques or customize their breathing rate as they see fit. This option is great for those testing out the app, practicing deep breathing techniques, or want to establish a base-line for their preferred breathing rate. We recommend this option for those experiencing a mild stress response.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Stress:</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Stress Mode provides less options for the user to specify and instead asks the user to determine their level of stress (correlated with ‘breaths per minute’) using a scroll bar. Once the level of stress has been identified, the app will begin a preloaded breathing regimen to aid the user with reducing their breathing rate and enacting a relaxation response. We recommend this option for those experiencing a mild to moderate stress response.  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.subtitle}>Panic:</Text>
                    <Text style={InformationScreenStyles.paragraphText}>The Panic Mode immediately jumps into a preloaded deep breathing regimen to reduce a user’s acute stress response. After a series of intervals, the app will ask the user if they would like to reduce their breathing rate (breaths per minute) or keep at the current level. We recommend this option for those experiencing a moderate to severe stress response. *  </Text>
                    <Text style={InformationScreenStyles.paragraphText}> </Text>
                    <Text style={InformationScreenStyles.paragraphText} onPress={() => navigation.navigate('ResourcesScreen')}>* Please note, this application is not a diagnostic tool and is not intended to substitute advice/support from a medical or mental health professional. Users experiencing frequent severe and acute stress responses should seek support from a medical professional.  To be taken to a list of resources, click here.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

function PanicScreen({ navigation }) {
    return (
        <View style={PanicScreenStyles.main} >
            <Text style={PanicScreenStyles.title}>Panic Screen</Text>
            <Text style={PanicScreenStyles.title} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
        </View>
    );
}
/* 


Helpful Resources 
UW Counselling Services: 519-888-4567, ext. 32655 (Mon 8:30am - 7:30pm, Tues - Fri 8:30am - 4:30pm) 
After Hours: Empower Me, Mental Health Resources (for UG and Grad students): 1-844-741-6389 
Good2Talk (confidential help line for post-secondary students): 1-866-5454 
Here24/7 (Waterloo Region mental health and crisis services team): 1-844-437-3247 
On-Campus Emergencies: UW Police: 519-888-4567, ext. 22222 
Back */

function ResourcesScreen({ navigation }) {
    return (
        <View style={ResourcesScreenStyles.main}>
            <ScrollView style={ResourcesScreenStyles.scrollView}>
                <View style={ResourcesScreenStyles.titleBox}>
                    <Text style={ResourcesScreenStyles.hiddenText}>Return to main</Text>
                    <Text style={ResourcesScreenStyles.title}>Resources</Text>
                    <Text style={ResourcesScreenStyles.return} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
                </View>
                <View style={ResourcesScreenStyles.paragraph}>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://uwaterloo.ca/campus-wellness/counselling-services')}>UW Counselling Services:</Text>
                    <Text style={ResourcesScreenStyles.paragrapht}> (Mon 8:30am - 7:30pm, Tues - Fri 8:30am - 4:30pm)  </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>519-888-4567, ext. 32655</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.subtitle}>After Hours:</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://wusa.ca/services/empower-me')}>Empower Me: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>Mental Health Resources (for UG and Grad students): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-844-741-6389 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://good2talk.ca/')}>Good2Talk: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>(confidential help line for post-secondary students): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-866-5454 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://here247.ca/')}>Here24/7: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>(Waterloo Region mental health and crisis services team): </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>1-844-437-3247 </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.subtitle}>On-Campus Emergencies:</Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    <Text style={ResourcesScreenStyles.paragraphtlink} onPress={() => Linking.openURL('https://uwaterloo.ca/police/')}>UW Police: </Text>
                    <Text style={ResourcesScreenStyles.paragrapht}>519-888-4567, ext. 22222  </Text>
                    <Text style={ResourcesScreenStyles.paragraph}> </Text>
                    {/* <Text style={ResourcesScreenStyles.paragraph} onPress={() => navigation.navigate('ResourcesScreen')}>* Please note, this application is not a diagnostic tool and is not intended to substitute advice/support from a medical or mental health professional. Users experiencing frequent severe and acute stress responses should seek support from a medical professional.  To be taken to a list of resources, click here.</Text> */}
                </View>
            </ScrollView>
        </View>
    );
}

export class StressScreen extends React.Component {

    static navigationOptions = {
        title: 'StressScreen',
    };

    state = {
        value: 1
    }

    render() {

        return (
            <View style={StressScreenStyles.main} >
                <View style={StressScreenStyles.title}>
                    <Text style={StressScreenStyles.titleText} >How Stressed Are You Feeling Today?</Text>
                </View>
                <View style={StressScreenStyles.container}>
                    <Slider
                        value={this.state.value}
                        onValueChange={(value) => this.setState({ value })}
                        maximumValue={10}
                        minimumValue={1}
                        thumbStyle={StressScreenStyles.thumbStyle}
                        thumbTintColor='#Dc6ee5'
                    />
                    <Text style={StressScreenStyles.decisionStyle} >Stress Level: {Math.round(this.state.value)}</Text>
                    <Text style={StressScreenStyles.decisionStyle}> You are feeling: {Selection(Math.round(this.state.value))} </Text>
                    <Text style={StressScreenStyles.decisionStyle}> Breathing Regiment: {BreathingRate(Math.round(this.state.value))} </Text>
                </View>
                <View style={StressScreenStyles.continueButton}>
                    <Text style={StressScreenStyles.continueText} onPress={() => this.props.navigation.navigate('TestingWaves', { value: Math.round(this.state.value) })}>Continue</Text>
                </View>
            </View>
        );
    }
}

function Selection(number) {
    if (number == 1) {
        return ("Not At All Stressed")
    }
    else if (number == 2) {
        return ("Barely Stressed")
    }
    else if (number == 3) {
        return ("Slightly Stressed")
    }
    else if (number == 4) {
        return ("Moderately Stressed")
    }
    else if (number == 5) {
        return ("Slightly More Stressed Than Usual")
    }
    else if (number == 6) {
        return ("More Stressed Than Usual")
    }
    else if (number == 7) {
        return ("Quite Stressed")
    }
    else if (number == 8) {
        return ("Very Stressed")
    }
    else if (number == 9) {
        return ("Severely Stressed")
    }
    else {
        return ("Extremely Stressed")
    }
}

function BreathingRate(number) {
    if (number == 1) {
        return ("In: 7s, Hold: 7s, Out: 8s")
    }
    else if (number == 2) {
        return ("In: 7s, Hold: 4s, Out: 7s")
    }
    else if (number == 3) {
        return ("In: 6s, Hold: 5s, Out: 7s")
    }
    else if (number == 4) {
        return ("In: 6s, Hold: 4s, Out: 4s")
    }
    else if (number == 5) {
        return ("In: 5s, Hold: 4s, Out: 7s")
    }
    else if (number == 6) {
        return ("In: 5s, Hold: 3s, Out: 6s")
    }
    else if (number == 7) {
        return ("In: 5s, Hold: 2s, Out: 5s")
    }
    else if (number == 8) {
        return ("In: 4s, Hold: 2s, Out: 5s")
    }
    else if (number == 9) {
        return ("In: 4s, Hold: 1s, Out: 4s")
    }
    else {
        return ("In: 4s, Hold: 0s, Out: 4s")
    }
}

function TestingWaves({ route, navigation }) {

    const { value } = route.params;

    return (
        <View style={TestingWavesStyles.main} >
            <Text style={TestingWavesStyles.text} onPress={() => navigation.navigate('MainScreen')}>Return to main</Text>
            <Text style={TestingWavesStyles.text}>Stress Level: {value}</Text>
        </View>
    );
}

const MainScreenStyles = StyleSheet.create({
    mainStyle: {
        backgroundColor: 'white',
        flex: 1,
    },
    titleText: {
        top: 100,
    },
    buttonsBack: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        top: '25%',
    },
    buttonPanic: {
        backgroundColor: '#FF7575',
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    bottomButtons: {
        flex: 0.75,
        top: '10%',
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    buttonFocus: {
        backgroundColor: '#049A64',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStress: {
        backgroundColor: '#53D396',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
    },
    textStyle: {
        color: 'dodgerblue',
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    sinWavesStyle: {
        alignSelf: 'center',
        fontWeight: "900",
        fontSize: 20,
    },
    resourcesStyle: {
        top: 25,
    },
    informationStyle: {
        top: 25,
    },
    topSelections: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
    }
})

const FocusScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: '#049A64',
        flex: 1,
    },
    text: {
        top: 250,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const InformationScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column'
    },
    titleBox: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    return: {
        fontSize: 14,
    },
    hiddenText: {
        fontSize: 14,
        color: 'white',
    },
    paragraph: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragraphText: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
})

const PanicScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: '#FF7575',
        flex: 1,
    },
    title: {
        top: 250,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

const ResourcesScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column'
    },
    titleBox: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    return: {
        fontSize: 14,
    },
    hiddenText: {
        fontSize: 14,
        color: 'white',
    },
    paragraph: {
        flex: 1,
        display: 'block',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragrapht: {
        flex: 1,
        display: 'inline',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragraphtlink: {
        flex: 1,
        display: 'inline',
        color: '#3e8a79',
        fontWeight: 'bold',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    paragraphText: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
})

const StressScreenStyles = StyleSheet.create({
    main: {
        backgroundColor: '#53D396',
        flex: 1,
    },
    title: {
        top: '25%',
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0,
    },
    container: {
        flex: 1,
        width: '90%',
        left: '5%',
        alignItems: "stretch",
        justifyContent: "center"
    },
    thumbStyle: {
        color: 'white'
    },
    decisionStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    continueButton: {
        height: 75,
        width: 150,
        bottom: '5%',
        justifyContent: 'center',
        backgroundColor: '#Dc6ee5',
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#53D396'
    },
    continueText: {
        fontSize: 20,
        alignSelf: 'center',
    },
});

const TestingWavesStyles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        top: 250,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
})


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="FocusScreen" component={FocusScreen} />
                <Stack.Screen name="InformationScreen" component={InformationScreen} />
                <Stack.Screen name="PanicScreen" component={PanicScreen} />
                <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
                <Stack.Screen name="StressScreen" component={StressScreen} initialParams={{ value: 2 }} />
                <Stack.Screen name="TestingWaves" component={TestingWaves} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

// For understanding containers and navigators check out https://www.youtube.com/watch?v=ufvDlmDg2L4

