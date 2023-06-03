import { View, FlatList, Dimensions } from "react-native";
import { useContext } from "react";

import TodoItem from "./TodoItem";
import TextInputField from "./TextInputField";
import { MyContext } from "../context/context";

const TodoList = () => {
  const { todoList } = useContext(MyContext);

  const screenHeight = Dimensions.get("window").height;
  const desiredPercentage = 40;

  const desiredHeight = (screenHeight * desiredPercentage) / 100;

  return (
    <View className="flex-1 justify-between mt-8">
      <View className="items-center">
        <FlatList
          style={{ height: desiredHeight }}
          data={todoList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem name={item.name} id={item.id} />}
        />
      </View>
      <View className="h-10 mb-5 justify-center items-center">
        <TextInputField />
      </View>
    </View>
  );
};

export default TodoList;
