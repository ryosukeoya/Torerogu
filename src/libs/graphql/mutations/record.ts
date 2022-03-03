import { gql } from '@apollo/client';

export const CREATE_BODY_INFO_HISTORIES = gql`
  mutation CreateBodyInfoHistories($height: numeric!, $weight: numeric, $body_fat_percentage: Int, $date: timestamptz) {
    insert_body_info_data_histories_one(object: { height: $height, body_fat_percentage: $body_fat_percentage, date: $date, weight: $weight, user_id: 1 }) {
      id
      user_id
      height
      weight
      body_fat_percentage
      date
    }
  }
`;
