import { gql } from '@apollo/client';

const GET_GRAPH_PAGE_PROPS = gql`
  query GetGraphPageProps {
    trainings(order_by: { id: asc }) {
      id
      user_id
      training_type_id
      training_weight
      training_count
      training_set
      is_finish
      date
    }
    body_info_data_histories(order_by: { id: asc }) {
      id
      user_id
      weight
      date
    }
  }
`;

const GET_TRAINING = gql`
  query GetTraining {
    trainings(order_by: { id: asc }) {
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

const GET_BODY_INFO_DATA_HISTORIES = gql`
  query GetBodyInfoDataHistories {
    body_info_data_histories(order_by: { id: asc }) {
      id
      user_id
      height
      weight
      body_fat_percentage
      date
    }
  }
`;

export { GET_GRAPH_PAGE_PROPS, GET_TRAINING, GET_BODY_INFO_DATA_HISTORIES };
