import { MovieType } from "./movie";

/* eslint-disable camelcase */
enum Gender {
  Male = 2,
  Female = 1,
}

interface KnownForType extends MovieType {
  poster_path: string;
  media_type: string;
}

export interface PeopleType {
  adult: boolean;
  gender: Gender;
  id: number;
  known_for_department: string | null;
  name: string;
  popularity: number;
  profile_path: string | null;
  original_name: string;
  media_type: string;
  known_for: KnownForType[];
}
