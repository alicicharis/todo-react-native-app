import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import AllTodos from "../../components/AllTodos";

const Todos = () => {
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
      <AllTodos />
    </SafeAreaView>
  );
};

export default Todos;
