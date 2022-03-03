import { gql } from '@apollo/client';

export const CREATE_BODY_INFO_HISTORIES = gql`
  mutation CreateBodyInfoHistories($height: numeric!, $weight: numeric, $body_fat_percentage: Int!, $date: timestamptz, $user_id: Int) {
    insert_body_info_data_histories_one(object: { height: $height, body_fat_percentage: $body_fat_percentage, date: $date, weight: $weight, user_id: $user_id }) {
      id
      user_id
      height
      weight
      body_fat_percentage
      date
    }
  }
`;
