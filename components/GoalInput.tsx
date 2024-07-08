import React from 'react';
import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";

const GoalInput = ({visible, inputToggle, enteredGoalsText, goalInputHandler, addGoalHandler}:
                       {
                           visible: boolean,
                           inputToggle: () => void,
                           enteredGoalsText: string,
                           goalInputHandler: (enteredText: string) => void,
                           addGoalHandler: () => void
                       }) => {

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.Image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="목표를 적어주세요!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalsText}
                />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button title="추가하기" onPress={addGoalHandler} color='#5e0acc'/>
                    </View>

                    <View style={styles.button}>
                        <Button title="닫기" onPress={inputToggle} color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal>);
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 16,
        backgroundColor:'#5370ff'
    },
    Image: {
        width: 100,
        height:100,
        margin:20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        paddingLeft: 8,
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '20%',
        marginHorizontal: 8
    }
})

export default GoalInput;
