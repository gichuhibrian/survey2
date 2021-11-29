import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {} from "react-native-web";
const SurveyScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.question}>
                <Text>This is the first question</Text>
            </View>
            <View style={styles.answers}>
                <TouchableOpacity>
                    <Text>Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 3</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Option 4</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SurveyScreen

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
    },
    buttons: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    question: {
        marginVertical: 16,
    },
    answers: {
        marginVertical: 16,
        flex: 1,
    },
})
