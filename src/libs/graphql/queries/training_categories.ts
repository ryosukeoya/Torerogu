import { gql } from '@apollo/client'

export const GET_TRAINING_CATEGORIES = gql`
  query GetTrainingCategories {
    training_categories(order_by: { id: asc }) {
      id
      name
    }
  }
`

export const GET_TRAINING_CATEGORIES_LOCAL = gql`
  query GetTrainingCategoriesLocal {
    training_categories(order_by: { id: asc }) @client {
      id
      name
    }
  }
`;