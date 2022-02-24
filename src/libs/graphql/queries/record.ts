import { gql } from '@apollo/client';

export const GET_RECORD_PAGE_PROPS = gql`
  query GetRecordPageProps {
    training_categories(order_by: { id: asc }) {
      id
      name
    }
    training_types {
      id
      name
      training_category_id
    }
  }
`;
