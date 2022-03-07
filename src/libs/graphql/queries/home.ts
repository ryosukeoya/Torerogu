import { gql } from '@apollo/client';

export const GET_HOME_PAGE_PROPS = gql`
  query GetHomePageProps($date: date ) {
    trainings(where: { date: { _eq: $date } }) {
      id
      user_id
      training_type_id
      training_weight
      training_count
      training_set
      is_finish
      date
      training_type {
        id
        name
      }
    }
  }
`;

// export const GET_HOME_PAGE_PROPS = gql`
//   query GetHomePageProps {
//     training_type {
//       id
//       name
//       trainings(where: { date: { _eq: "2022-03-04" } }) {
//         id
//         user_id
//         training_type_id
//         training_weight
//         training_count
//         training_set
//         is_finish
//         date
//       }
//     }
//   }
// `;
