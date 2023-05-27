import React, {useState, useEffect} from "react";
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl,
   Input, Link, Button, HStack, Center, Pressable, Badge, Spacer, Flex, Fab } from 'native-base';
// import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, View} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from "../components/Footer";
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({navigation,}) => {

    // const dispatch = useDispatch()
    // const postState = useSelector((state) => state.post)
    // const userState = useSelector((state) => state.auth)
    // console.log(postState,'poststate')
    // console.log(userState,'userState')
    // console.log(postState.loading, 'loading')
    // useEffect(() => {
    //     dispatch(getPosts())
    // }, [])

    // if(postState.loading){
    //     return <EmptyContainer/>
    // }
    // const [selected, setSelected] = React.useState(1);
    const openMarketPage = () => {
      navigation.navigate("Market Details")
    }

    
    return (
        <>
            <SafeAreaView style={styles.container}>
              <ScrollView>
              <Pressable bg="#3281D5" cursor="pointer" my="6" py="3" mx="6" flex={1} rounded="5">
                <Center>
                  <Text color="white" fontSize="16">
                    Have a contest code?
                  </Text>
                </Center>
              </Pressable> 
              <Box>
      <Pressable maxW="96">
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" ml="6" mr="4" paddingBottom="4" rounded="8" borderWidth="1" borderColor="coolGray.300">
              <HStack alignItems="center">
                <Badge colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Upcoming
                </Badge>
                <Spacer />
                <Text fontSize={10} color="coolGray.800">
                  Tomorrow
                </Text>
              </HStack>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Friday Funday
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                12 May 09:15 am - 03:30 pm
              </Text>
              <Button my="3" bg="#3281D5" cursor="pointer" rounded="5">
                <Text color="white" fontSize="sm" alignItems="center">Join Contest</Text>
              </Button>
            </Box>;
      }}
      </Pressable>
    </Box>
    <Box mt="3">
      <Pressable maxW="96">
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" ml="6" mr="4" paddingBottom="4" rounded="8" borderWidth="1" borderColor="coolGray.300">
              <HStack alignItems="center">
                <Badge colorScheme="darkBlue" _text={{
              color: "white"
            }} variant="solid" rounded="4">
                  Upcoming
                </Badge>
                <Spacer />
              </HStack>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Monday Masti
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                15 May 09:15 am - 03:30 pm
              </Text>
              <Button my="3" bg="#3281D5" cursor="pointer" rounded="5">
                <Text color="white" fontSize="sm" alignItems="center">Join Contest</Text>
              </Button>
            </Box>;
      }}
      </Pressable>
    </Box>
              </ScrollView>
              <TouchableOpacity
                onPress={openMarketPage}
                style={{
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.2)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  position: 'absolute',
                  bottom: 70,
                  right: 10,
                  height: 35,
                  backgroundColor: '#fff',
                  borderRadius: 100,
                }}
              >
                <Text>Market</Text>
              </TouchableOpacity>
                {/* <Fab renderInPortal={false} shadow={2} placement="top-right" size="sm" icon={<Icon color="white" name="lightbulb" size="4" />} label="Quick Start" /> */}
                <Footer/>
            </SafeAreaView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5F8FC',
      justifyContent: 'flex-start',
      // padding: 4,
      flex: 1,
    },
    emptyContainer: {
      flex: 1,
      backgroundColor: '#F5F8FC',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });