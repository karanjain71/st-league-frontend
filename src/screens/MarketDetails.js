import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
  Pressable,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  NativeBaseProvider,
  Box,
  Text,
  FlatList,
  HStack,
  VStack,
  Spacer,
  Icon,
} from 'native-base';
import Footer from '../components/Footer';
import {
  getAllStocks,
  getTopGainers,
  getTopLosers,
} from '../helpers/backend_helper';
import {useEffect} from 'react';

const MarketDetails = ({navigation}) => {
  const Market = () => {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="0.2"
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={5}
            pr={5}
            pb={2}
            marginY={2}>
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack pl={3}>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.CompanyName}
                </Text>
              </VStack>
              <Spacer />
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                {item.ltp}
              </Text>
              {/* <Icon color="black" name="chevron-right" paddingY={10}/> */}
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.CompanyName}
      />
    );
  };

  const TopGainers = () => {
    return (
      <FlatList
        data={topGainersData}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="0.2"
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={5}
            pr={5}
            pb={2}
            marginY={2}>
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack pl={3}>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.CompanyName}
                </Text>
              </VStack>
              <Spacer />
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                {item.dayChangePerc}%
              </Text>
              {/* <Icon color="black" name="chevron-right" paddingY={10}/> */}
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.CompanyName}
      />
    );
  };

  const TopLosers = () => {
    return (
      <FlatList
        data={topLosersData}
        renderItem={({item}) => (
          <Box
            borderBottomWidth="0.2"
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={5}
            pr={5}
            pb={2}
            marginY={2}>
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack pl={3}>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.CompanyName}
                </Text>
              </VStack>
              <Spacer />
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                {item.dayChangePerc}%
              </Text>
              {/* <Icon color="black" name="chevron-right" paddingY={10}/> */}
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.CompanyName}
      />
    );
  };

  const initialLayout = {width: Dimensions.get('window').width};

  const renderScene = SceneMap({
    market: Market,
    top_gainers: TopGainers,
    top_losers: TopLosers,
  });

  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [topGainersData, setTopGainersData] = React.useState([]);
  const [topLosersData, setTopLosersData] = React.useState([]);

  const [routes] = React.useState([
    {key: 'market', title: 'Market'},
    {key: 'top_gainers', title: 'Top Gainers'},
    {key: 'top_losers', title: 'Top Losers'},
  ]);

  async function getAllStocksData() {
    const response = await getAllStocks();
    setData(response);
  }
  async function getTopGainersData() {
    const response = await getTopGainers();
    setTopGainersData(response);
  }
  async function getTopLosersData() {
    const response = await getTopLosers();
    setTopLosersData(response);
  }

  useEffect(() => {
    getAllStocksData();
    getTopGainersData();
    getTopLosersData();
  }, []);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" borderColor="red">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.3,
            ),
          });

          return (
            <Box flex={1} alignItems="center" mx="3" p={2} cursor="pointer">
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}>
                <Animated.Text style={{opacity}}>{route.title}</Animated.Text>
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
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{marginTop: StatusBar.currentHeight}}
        key={routes.key}></TabView>

      <Footer />
    </NativeBaseProvider>
  );
};

export default MarketDetails;

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
});
