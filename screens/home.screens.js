import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Title from "../components/title.components";

const HomeScreen = () => {
    return (
        <View>
            <Title title="Home" />
            <View style={styles.bannerContainer}>
                <Image
                    style={styles.banner}
                    resizeMode="contain"
                    source={{uri: 'https://image.freepik.com/free-vector/survey-report-checklist-questionnaire-business-illustration_114835-117.jpg'}} />
            </View>
            <TouchableOpacity>
                <Text>Take Survey</Text>
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
    }
})
