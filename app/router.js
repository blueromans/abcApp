import React from 'react';
import {Animated, Easing} from 'react-native';
import DefaultPage from './views/default';
import { createStackNavigator } from 'react-navigation-stack';

const DefaultStack = createStackNavigator({
    Default: DefaultPage,

}, {
    transitionConfig: () => transitionConfig(),
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'rgba(0,0,0,0)',
    },

});
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        containerStyle: {
            backgroundColor: 'rgba(0,0,0,0)',
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;

            const thisSceneIndex = scene.index;
            const width = layout.initWidth;

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            });

            return {transform: [{translateX}]};
        },
    };
};
export default DefaultStack;

