import { gql } from '@apollo/client';

export const CREATE_BODY_INFO_HISTORIES = gql`
  mutation CreateBodyInfoHistories($height: numeric!, $weight: numeric, $body_fat_percentage: Int!, $date: timestamptz, $user_id: Int, $is_record: Boolean) {
    insert_body_info_data_histories_one(object: { height: $height, body_fat_percentage: $body_fat_percentage, date: $date, weight: $weight, user_id: $user_id, is_record: $is_record }) {
      id
      user_id
      height
      weight
      body_fat_percentage
      date
      is_record
    }
  }
`;

export const CREATE_TRAINING = gql`
  mutation CreateTraining($user_id: Int, $training_type_id: Int, $training_weight: numeric!, $training_count: Int!, $training_set: Int!, $is_finish: Boolean, $date: date) {
    insert_trainings_one(object: { user_id: $user_id, training_type_id: $training_type_id, training_weight: $training_weight, training_count: $training_count, training_set: $training_set, is_finish: $is_finish, date: $date }) {
      id
      user_id
      training_type_id
      training_weight
      training_count
      training_set
      is_finish
      date
    }
  }
`;
