import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView>
        <Text>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
    </TailwindProvider>
  );
}

