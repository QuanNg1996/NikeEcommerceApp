import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Screens
import { Home } from './screens';

import { icons, COLORS, FONTS, SIZES } from './constants'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparents',
  }
}

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Navigator initialRouteName={'Home'}>
        <Screen
          name="Home"
          component={Home}
          options={{
            title: 'SHOE SELECTOR',
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              ...FONTS.navTitle
            },
          
            headerLeft: ({ onPress }) => (
              <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={onPress}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("Pressed")}
              >
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{ width: 30,height: 30 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App />;
};
