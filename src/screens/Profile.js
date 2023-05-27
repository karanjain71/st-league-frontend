import React from 'react';
import {
  Image,
  Center,
  Divider,
  FlatList,
  Box,
  VStack,
  HStack,
  Spacer,
  Avatar,
  Text,
  Stack,
  Heading,
} from 'native-base';
import Footer from './../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

function Profile() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      itemKey: 'Name',
      value: 'Karan Jain',
      icon: 'user',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      itemKey: 'Email',
      value: 'karanjain71@gmail.com',
      icon: 'envelope',
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      itemKey: 'Phone Number',
      value: '+91 9748495951',
      icon: 'phone',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      itemKey: 'Balance',
      value: 'Rs. 91',
      icon: 'inr',
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      itemKey: 'Aadhaar Card',
      value: 'NULL',
      icon: 'address-card',
    },
  ];
  return (
    <>
      <ScrollView h={10}>
        <Center>
          <Image
            my={3}
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            size={115}
            borderRadius={100}
            alt="Profile picture"
          />
        </Center>
        <Divider />
        <Text pl={5} mt={3}>
          Contest Details
        </Text>
        <Stack direction="row" mb="2" mt="6" space={3} mx="4">
          <Center
            size="16"
            bg="white"
            rounded="sm"
            _text={{
              color: 'black',
              fontWeight: 'medium',
            }}
            shadow={'3'}
            width={175}>
            Contests won: 2
          </Center>
          <Center
            bg="white"
            size="16"
            rounded="sm"
            _text={{
              color: 'black',
              fontWeight: 'medium',
            }}
            shadow={'3'}
            width={175}>
            Number of contests: 10
          </Center>
        </Stack>
        <Stack direction="row" mb="6" mt="1.5" space={3} mx="4">
          <Center
            size="16"
            bg="white"
            rounded="sm"
            _text={{
              color: 'black',
              fontWeight: 'medium',
            }}
            shadow={'3'}
            width={175}>
            Total Earning: 100
          </Center>
          <Center
            bg="white"
            size="16"
            rounded="sm"
            _text={{
              color: 'black',
              fontWeight: 'medium',
            }}
            shadow={'3'}
            width={175}>
            Total Referrals: 2
          </Center>
        </Stack>
        <Divider />
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'muted.50',
              }}
              borderColor="muted.800"
              pl={5}
              pr={5}
              pb={2}
              marginY={2}>
              <HStack space={[2, 3]} justifyContent="space-between">
                <Icon name={item.icon} color="black" size={20} margin={10} />
                <VStack pl={3}>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.itemKey}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.value}
                  </Text>
                </VStack>
                <Spacer />
                <Icon color="black" name="chevron-right" paddingY={10} />
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <Footer />
    </>
  );
}

export default Profile;
