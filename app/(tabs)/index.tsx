import { StatusBar } from 'expo-status-bar';
import { Animated, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import ScrollView = Animated.ScrollView;

export default function App() {
    const [enteredGoalsText, setEnteredGoalsText] = useState<string>('');
    const [courseGoals, setCourseGoals] = useState<string[]>([]);

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalsText(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoalsText === '') return;
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalsText]);
        setEnteredGoalsText(''); // TextInput 필드를 초기화
    }

    const deleteGoalHandler = (index: number) => {
        setCourseGoals(currentCourseGoals =>
            currentCourseGoals.filter((goal, goalIndex) => goalIndex !== index)
        );
    }

    const renderItem = ({ item, index }: { item: string, index: number }) => (
        <View style={styles.goalsItem}>
            <Text>{item}</Text>
            <Button title="삭제버튼" onPress={() => deleteGoalHandler(index)} />
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar style={"dark"} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="목표를 적어주세요!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalsText}
                />
                <Button title="목표 추가하기" onPress={addGoalHandler} />
            </View>
            <FlatList
                data={courseGoals}
                renderItem={renderItem}
                // keyExtractor 를 사용해 FlatList 가 키를 인식할 수 있게함
                keyExtractor={(item, index) => index.toString()} // keyExtractor 추가
                contentContainerStyle={styles.goalsContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        paddingBottom:20,
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        paddingLeft: 8,
    },
    goalsContainer: {
        flexGrow: 1,
    },
    goalsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginBottom: 16,
        borderColor: 'gray',
        borderBottomWidth: 1,
    }
});
