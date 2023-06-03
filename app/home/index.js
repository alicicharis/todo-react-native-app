import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import TodoList from "../../components/TodoList";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ backgroundColor: "rgb(109, 99, 255)", flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(109, 99, 255)" },
          headerTitle: "Todo App",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerShadowVisible: false,
        }}
      />
      <TodoList />
    </SafeAreaView>
  );
};

export default Home;
