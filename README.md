# KnowUG
This is a mobile application built with react native expo

# CREATED THE PROJECT USING REACT NATIVE EXPO FOR BOTH ANDROID AND IOS

# USE OF THIS PROJECT
1. This project will be used for all people who want to know more about university of ghana legon 
2. it will be used by all mobile app users (for android and IOS)

#Testing Devices

1. Samsung Galaxy A20 (Android)
2. Iphone 11 pro max  (IOS)

# STYLING 
 1. Tailwind css react native

# STEPS TO SETUP THE TAILWIND CSS

1. Open https://www.npmjs.com/package/tailwindcss-react-native
2. Go to the quick start guide and start with the number two
3. install this " yarn add tailwindcss-react-native
yarn add tailwindcss -D "
4. run npx tailwindcss init note: after this line is runed you will see the tailwind configuration file showing in the root of your project
5. change the content by replacing the content in the tailwind.config.js file with " content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"], "
6. update the plugins too with this content " plugins: ["tailwindcss-react-native/babel"], "
7. Add the tailwind provider by doing this 

go to your app.js and add the following import
1. import { TailwindProvider } from 'tailwindcss-react-native';
2. and wrap your view in the app.js with
 <TailwindProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
  </TailwindProvider>
