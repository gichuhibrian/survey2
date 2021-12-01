import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Title from "../components/title.components";

const CompletedScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Image
                    style={styles.banner}
                    resizeMode="contain"
                    source={{uri: 'https://lh3.googleusercontent.com/proxy/3AxYRr5XkIRC9afvQlSa4o4DFgNaGHuS-SNTw2DQkSJlzgFzbNoT28XlKTfravHtB32ldsVVJiyY3su1vaddO7fNCFkWMJEt-vcFGvJXBmFGTh65AY5HE3nFnUgnTI85QPBOP9AITK8uC_M'}} />
            </View>
            <Title title='Thank you for taking part in the survey' />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CompletedScreen

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
