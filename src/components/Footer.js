import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Pressable, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Footer = (props) => {

  const [selected, setSelected] = useState(0);
  const navigation = useNavigation();
  const goToHome = () => {
    setSelected(0)
    navigation.navigate("Home")
  }

  const goToMyContests = () => {
    setSelected(1)
    navigation.navigate("My Contests")
  }
  const goToProfile = () => {
    setSelected(2)
    navigation.navigate("Profile")
  }
  const goToMore = () => {
    setSelected(3)
    navigation.navigate("More Settings")
  }
  useEffect(() => {
  }, [selected])
  return <>
    <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
      <Box flex={1} bg="white" width="100%" maxW="500px">

        <HStack bg="white" bottom={0}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="2" flex={1} onPress={goToHome}>
            <Center>
              <Icon color="#000" name="home" size={25} />
              <Text color="#000" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={goToMyContests}>
            <Center>
              <Icon color="#000" name="trophy" size={25} />
              <Text color="black" fontSize="12">
                My Contests
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.5} py="2" flex={1} onPress={goToProfile}>
            <Center>
              <Icon color="#000" name="user" size={25} />
              <Text color="black" fontSize="12">
                Profile
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={goToMore}>
            <Center>
              <Icon color="#000" name="ellipsis-v" size={25} />
              <Text color="black" fontSize="12">
                More
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
      {/* <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" name="lightbulb" size="4" />} label="Quick Start" /> */}
    </View>
  </>;
}

export default Footer;


// const styles = StyleSheet.create({
//     container: {
//         // backgroundImage: "../assets/login-page.jpg",
//         backgroundColor: 'white',
//         flex: 1,
//         justifyContent: 'flex-start',
//     },
//     buttons: {
//         alignSelf: "stretch",
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingVertical: 15,
//         borderRadius: 7,
//         marginHorizontal: 15,
//         marginVertical: 20
//     },
//     input: {
//     },
//     image: {
//         width: 400,
//         height: 400
//     }
//   });