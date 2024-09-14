import { Dimensions, Image, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { format } from "date-fns";
import { MovieType } from "../../../../types/movie";
import { API } from "../../../../api";
import Rate from "../../rate";
import { styles, theme } from "../../../../themes";

type MovieCardSize = "normal" | "small";

interface MovieCardProps {
  movie: MovieType;
  onPress: () => void;
  size?: MovieCardSize;
  children?: React.ReactNode;
}

const { width, height } = Dimensions.get("window");

const MovieCard = ({ movie, onPress, size = "normal", children }: MovieCardProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View className="mx-2 mb-4">
      <View>
        <Image
          source={{
            uri: movie.poster_path
              ? API.getImageUrl(movie.poster_path)
              : "https://us.123rf.com/450wm/infadel/infadel1712/infadel171200119/91684826-a-black-linear-photo-camera-logo-like-no-image-available.jpg?ver=6",
          }}
          className="rounded-3xl"
          width={size === "normal" ? width * 0.7 : 150}
          height={size === "normal" ? height * 0.5 : 200}
        />
        <View className="absolute left-4 -bottom-4 bg-slate-900 rounded-full">
          <Rate progress={movie.vote_average / 10} rate={movie.vote_average} size={size} />
        </View>
      </View>
      <View className="pt-4">
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.text, { width: size === "normal" ? width * 0.7 : 150 }]}
          className="font-bold"
        >
          {movie.title}
        </Text>
        <Text className="text-slate-500 mt-0.5">
          {movie.release_date ? format(new Date(movie.release_date), "MMMM dd, yyyy") : "Not released yet"}
        </Text>
      </View>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default MovieCard;

interface MovieCardSkeleton {
  size?: MovieCardSize;
}

MovieCard.Skeleton = ({ size = "normal" }: MovieCardSkeleton) => (
  <View className={`bg-[${theme.skeleton}] rounded-3xl py-4 mx-2`} />
);
