import React, {useState, useEffect} from "react";
import {StyleSheet, Text, SafeAreaView, FlatList} from "react-native"

const Home = ({navigator,}) => {

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
    
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Text>Hello world</Text>  
            </SafeAreaView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      justifyContent: 'flex-start',
      padding: 4,
      flex: 1,
    },
    emptyContainer: {
      flex: 1,
      backgroundColor: '#1b262c',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });