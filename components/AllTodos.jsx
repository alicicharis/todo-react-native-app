import { View, FlatList, Dimensions } from "react-native";
import { useContext } from "react";

import { MyContext } from "../context/context";
import TodoItem from "./TodoItem";

const AllTodos = () => {
  const { allTodos } = useContext(MyContext);

  const screenHeight = Dimensions.get("window").height;
  const desiredPercentage = 80;

  const desiredHeight = (screenHeight * desiredPercentage) / 100;

  return (
    <View className="justify-center items-center mt-8">
      <FlatList
        style={{ height: desiredHeight }}
        showsVerticalScrollIndicator={false}
        data={allTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem name={item.name} id={item.id} done={item.done} />
        )}
      />
    </View>
  );
};

export default AllTodos;
