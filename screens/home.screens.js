import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Title from "../components/title.components";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title title="Home" />
            <View style={styles.bannerContainer}>
                <Image
                    style={styles.banner}
                    resizeMode="contain"
                    source={{uri: 'https://image.freepik.com/free-vector/school-building-design-vector-illustrator_24640-49040.jpg'}} />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Survey')}>
                <Text style={styles.buttonText}>Take Survey</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        padding: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: 'orange',
    },
    button: {
        width: '100%',
        backgroundColor: 'purple',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',

    }
})
