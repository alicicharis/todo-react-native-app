import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useContext } from "react";

import { MyContext } from "../context/context";

const TodoItem = ({ name, id, done }) => {
  const { handleRemoveTodo } = useContext(MyContext);

  const screenWidth = Dimensions.get("window").width;

  return (
    <View
      className={`h-12 rounded-[12px] flex justify-between flex-row items-center px-4 mb-5 ${
        done ? "bg-gray-400" : "bg-white"
      }`}
      style={{ width: screenWidth - 50 }}
    >
      <Text className={`text-[18px] font-medium ${done ? "line-through" : ""}`}>
        {name}
      </Text>
      {!done ? (
        <TouchableOpacity onPress={() => handleRemoveTodo(id)}>
          <MaterialIcons name="delete" size={24} color="rgb(109, 99, 255)" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => handleRemoveTodo(id)}>
          <FontAwesome5 name="check" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TodoItem;
