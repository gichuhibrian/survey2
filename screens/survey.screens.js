import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import axios from "axios";
const SurveyScreen = ({navigation}) => {
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const getQuestions = async() => {
        const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        const data = await(response.json())
        console.log('response', data.results);
        setQuestions(data.results);
    }

    useEffect(() => {
       getQuestions();
    }, []);

    return (
        <View style={styles.container}>
            {
                questions && (
                    <View style={styles.parent}>
                        <View style={styles.question}>
                            <Text style={styles.questionText}>Q. This is the first question</Text>
                        </View>
                        <View style={styles.answers}>
                            <TouchableOpacity style={styles.answerButton}>
                                <Text style={styles.answer}>Option 1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.answerButton}>
                                <Text style={styles.answer}>Option 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.answerButton}>
                                <Text style={styles.answer}>Option 3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.answerButton}>
                                <Text style={styles.answer}>Option 4</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>SKIP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>NEXT</Text>
                            </TouchableOpacity>
                            {/*<TouchableOpacity style={styles.button}>*/}
                            {/*    <Text style={styles.buttonText}>END</Text>*/}
                            {/*</TouchableOpacity>*/}
                        </View>
                    </View>
                )
            }

        </View>
    )
}

export default SurveyScreen

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    footer: {
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
    button: {
        paddingHorizontal: 16,
        backgroundColor: '#B8B8FF',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',

    },
    questionText: {
        fontSize: 28,
    },
    answer: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black'
    },
    answerButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#FFD8BE',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%'
    }
})
