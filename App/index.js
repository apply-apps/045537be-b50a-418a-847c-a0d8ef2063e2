// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={stylesApp.container}>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Story" component={StoryScreen} />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
};

const stylesApp = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
});

const stories = [
    { id: '1', title: 'Cinderella', content: 'Once upon a time...' },
    { id: '2', title: 'Snow White', content: 'A long time ago...' },
    { id: '3', title: 'Little Red Riding Hood', content: 'In a small village...' },
];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Story', { story: item })}>
            <View style={stylesHomeScreen.storyItemBox}>
                <Text style={stylesHomeScreen.storyItem}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={stylesHomeScreen.container}>
            <Text style={stylesHomeScreen.header}>Fairy Tale List</Text>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
};

const stylesHomeScreen = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    storyItemBox: {
        marginBottom: 10,
        padding: 14,
        backgroundColor: '#E0FFFF',
        borderRadius: 5,
    },
    storyItem: {
        fontSize: 18,
    }
});

const StoryScreen = ({ route }) => {
    const { story } = route.params;

    return (
        <ScrollView contentContainerStyle={stylesStoryScreen.container}>
            <Text style={stylesStoryScreen.title}>{story.title}</Text>
            <Text style={stylesStoryScreen.content}>{story.content}</Text>
        </ScrollView>
    );
};

const stylesStoryScreen = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    content: {
        fontSize: 18,
        lineHeight: 26,
    }
});

export default App;