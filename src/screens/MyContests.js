import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
  Pressable,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {NativeBaseProvider, Box, Text, Divider} from 'native-base';
import Footer from '../components/Footer';
import {notInitialized} from 'react-redux/es/utils/useSyncExternalStore';
import {useSelector} from 'react-redux';

const PastRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]} />
);

const LiveRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]}></View>
);

const UpcomingRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  past: PastRoute,
  live: LiveRoute,
  upcoming: UpcomingRoute,
});
// import { CurrentRenderContext } from "@react-navigation/native";

const MyContests = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const token = useSelector(state => state.auth.authToken);
  const [routes] = React.useState([
    {key: 'past', title: 'Past'},
    {key: 'live', title: 'Live'},
    {key: 'upcoming', title: 'Upcoming'},
  ]);
  const handleIndexChange = index => this.setState({index});

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <>
        {/* <Box flexDirection="row">
          {props.navigationState.routes.map((route, i) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? 1 : 0.3,
              ),
            });
            return (
              <Box flex={1} alignItems="center" mx="3" cursor="pointer" key={i}>
                <Pressable
                  style={{
                    paddingHorizontal: 10,
                    borderBottomColor: 'black',
                    paddingBottom: 10,
                    borderBottomWidth: 3,
                  }}
                  onPress={() => {
                    setIndex(i);
                  }}>
                  <Animated.Text
                    style={{
                      opacity,
                    }}>
                    {route.title}
                  </Animated.Text>
                </Pressable>
              </Box>
            );
          })}
        </Box> */}
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: 'white'}}
          renderLabel={({route, focused, color}) => (
            <Text style={{color}}>{route.title}</Text>
          )}
        />
        <Divider />
      </>
    );
  };

  return (
    <NativeBaseProvider>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
      <Footer />
    </NativeBaseProvider>
  );
};

export default MyContests;

const styles = StyleSheet.create({
  container: {
    // backgroundImage: "../assets/login-page.jpg",
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
  },
  buttons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  input: {},
  image: {
    width: 400,
    height: 400,
  },
  scene: {
    flex: 1,
  },
});
