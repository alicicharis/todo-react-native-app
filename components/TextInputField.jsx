import { View, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { useContext, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { MyContext } from "../context/context";

const TextInputField = () => {
  const inputRef = useRef();
  const { handleInputValue } = useContext(MyContext);
  const [input, setInput] = useState("");

  const screenWidth = Dimensions.get("window").width;

  const handleSubmit = () => {
    const value = input;
    if (!value) return;

    const item = {
      id: Math.random(),
      name: value,
    };

    inputRef.current.clear();
    inputRef.current.blur();
    setInput("");
    handleInputValue(item);
  };

  return (
    <View
      className="flex flex-row justify-center items-center h-12 mx-6"
      style={{ width: screenWidth - 50 }}
    >
      <View className="flex flex-1 justify-center items-center h-12 bg-white rounded-[12px]">
        <TextInput
          ref={inputRef}
          onChangeText={(e) => setInput(e)}
          placeholder="Add Todo"
          placeholderTextColor="gray"
          cursorColor="rgb(109, 99, 255)"
          className="text-[18px] h-12 text-center"
        />
      </View>
      <TouchableOpacity
        disabled={input ? false : true}
        onPress={handleSubmit}
        className={`ml-5 h-12 flex justify-center items-center rounded-[12px] px-4 ${
          input ? "bg-white" : "bg-slate-300"
        } `}
      >
        <FontAwesome
          name="plus"
          size={24}
          color={input ? "rgb(109, 99, 255)" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TextInputField;
