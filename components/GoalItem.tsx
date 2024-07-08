import React from 'react';
import { Pressable, Text, View, StyleSheet } from "react-native";

const GoalItem = ({ item, index, deleteGoalHandler }: { item: string, index: number, deleteGoalHandler: (index: number) => void }) => {
    return (
        <View style={styles.goalsItem}>
            <Text>{item}</Text>
            <Pressable android_ripple={{color:'#dddddd'}} onPress={() => deleteGoalHandler(index)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>X</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginTop:16,
        borderColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor:'white',
        borderRadius: 20
    },
    deleteButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: 'red',
        borderRadius: 4,

    },
    buttonText: {
        color: 'white',
    },
});

export default GoalItem;
