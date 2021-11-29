import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Title from "../components/title.components";

const CompletedScreen = ({navigation}) => {
    return (
        <View>
            <Title title='Result' />
            <View style={styles.bannerContainer}>
                <Image
                    style={styles.banner}
                    resizeMode="contain"
                    source={{uri: 'https://image.freepik.com/free-vector/happy-people-dancing-party-flat-illustration_74855-5264.jpg'}} />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CompletedScreen

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
})
