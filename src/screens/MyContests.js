import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
  Pressable,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text } from 'native-base';
import Footer from '../components/Footer';

const PastRoute = () => <Box flex={1} bg="white" />;

const LiveRoute = () => <Box flex={1} bg="white" />;

const UpcomingRoute = () => <Box flex={1} bg="white" />;

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  past: PastRoute,
  live: LiveRoute,
  upcoming: UpcomingRoute,
});
// import { CurrentRenderContext } from "@react-navigation/native";


const MyContests = ({navigation,}) => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'past', title: 'Past' },
      { key: 'live', title: 'Live' },
      { key: 'upcoming', title: 'Upcoming' },
    ]);
  
    const renderTabBar = (props) => {
      const inputRange = props.navigationState.routes.map((x, i) => i);
      return (
        <Box flexDirection="row">
          {props.navigationState.routes.map((route, i) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex) =>
                inputIndex === i ? 1 : 0.5
              ),
            });
  
            return (
              <Box flex={1} alignItems="center" mx="3" p={2} cursor="pointer">
                <Pressable
                  onPress={() => {
                    console.log(i);
                    setIndex(i);
                  }}
                >
                  <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
                </Pressable>
              </Box>
            );
          })}
        </Box>
      );
    };
  
    return (
      <NativeBaseProvider>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={{ marginTop: StatusBar.currentHeight }}
        />
        <Footer/>
      </NativeBaseProvider>
    );
}

export default MyContests;


const styles = StyleSheet.create({
    container: {
        // backgroundImage: "../assets/login-page.jpg",
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-start',
    },
    buttons: {
        alignSelf: "stretch",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 7,
        marginHorizontal: 15,
        marginVertical: 20
    },
    input: {
    },
    image: {
        width: 400,
        height: 400
    }
  });