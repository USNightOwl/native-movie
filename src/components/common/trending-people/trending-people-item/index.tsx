import { Dimensions, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PeopleType } from "../../../../types/people";
import { API } from "../../../../api";

interface PeopleItemCardProp {
  data: PeopleType;
  isReverse?: boolean;
}

const { width } = Dimensions.get("window");

const PeopleItemCard = ({ data: person, isReverse }: PeopleItemCardProp) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Artist", { id: person.id })}
      style={{ width: width * 0.85 }}
      className="ml-4 items-center"
    >
      <View className={`my-4 ${isReverse ? "flex-row-reverse" : "flex-row"}`}>
        <View className="overflow-hidden items-center">
          <Image
            width={width * 0.4}
            height={120}
            className="rounded-2xl"
            source={{
              uri: person.profile_path
                ? API.getImageUrl(person.profile_path)
                : "https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/91684826-a-black-linear-photo-camera-logo-like-no-image-available.jpg?ver=6",
            }}
          />
        </View>
        <View className="flex-col px-3 py-4 mt-auto">
          <Text numberOfLines={1} className="text-white text-base font-semibold">
            {person.name}
          </Text>
          <Text numberOfLines={3} style={{ width: width * 0.4 }} className="text-slate-300 tex-xs mt-1">
            {person.known_for?.map((product) => (
              <Text key={product.id}>{product.title}, </Text>
            ))}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PeopleItemCard;

const styles = StyleSheet.create({});
