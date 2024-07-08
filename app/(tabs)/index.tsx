import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, View, Button} from 'react-native';
import {useState} from "react";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";

export default function App() {
    const [enteredGoalsText, setEnteredGoalsText] = useState<string>('');
    const [courseGoals, setCourseGoals] = useState<string[]>([]);
    const [modalIsVisible, setModalIsVisible] = useState(false)

    const goalInputHandler = (enteredText: string) => {
        setEnteredGoalsText(enteredText);
    }

    const addGoalHandler = () => {
        if (enteredGoalsText === '') return;
        setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalsText]);
        setEnteredGoalsText(''); // TextInput 필드를 초기화
        inputToggle();
    }

    const deleteGoalHandler = (index: number) => {
        setCourseGoals(currentCourseGoals =>
            // 사용하지 않는 매개변수는 _ 를 사용해 명시해줄 것
            currentCourseGoals.filter((_, goalIndex) => goalIndex !== index)
        );
    }

    const inputToggle = () => {
        setModalIsVisible(modalIsVisible => !modalIsVisible)
    }

    return (
        <View style={styles.container}>
            <StatusBar style={"dark"}/>
            <Button title='목표 추가하기' onPress={inputToggle}/>
            <GoalInput
                visible={modalIsVisible}
                inputToggle={inputToggle}
                enteredGoalsText={enteredGoalsText}
                goalInputHandler={goalInputHandler}
                addGoalHandler={addGoalHandler}/>
            {/*
            ScrollView 는 모든 요소를 한번에 렌더링 함으로 대용량의 데이터를
            처리하기에는 부적합함, FlatList 는화면에 보여지는 내용만 렌더링함
            스크롤시에 그다음 내용이 추가적으로 렌더링 되는 구조로 더 효율적임
             */}

            <FlatList
                data={courseGoals}
                renderItem={({item, index}) => (
                    <GoalItem item={item} index={index} deleteGoalHandler={deleteGoalHandler}/>
                )}
                // keyExtractor 를 사용해 FlatList 가 키를 인식할 수 있게함
                keyExtractor={(_, index) => index.toString()} // keyExtractor 추가
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
        backgroundColor: '#5370ff',
    },

    goalsContainer: {
        flexGrow: 1,
        marginBottom:16,
    },

});
