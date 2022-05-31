import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: number;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "body_info_data_histories" */
export type Body_Info_Data_Histories = {
  __typename?: 'body_info_data_histories';
  body_fat_percentage?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  date: Scalars['timestamptz'];
  height?: Maybe<Scalars['numeric']>;
  id: Scalars['Int'];
  is_record: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
  weight: Scalars['numeric'];
};

/** Boolean expression to filter rows from the table "body_info_data_histories". All fields are combined with a logical 'AND'. */
export type Body_Info_Data_Histories_Bool_Exp = {
  _and?: InputMaybe<Array<Body_Info_Data_Histories_Bool_Exp>>;
  _not?: InputMaybe<Body_Info_Data_Histories_Bool_Exp>;
  _or?: InputMaybe<Array<Body_Info_Data_Histories_Bool_Exp>>;
  body_fat_percentage?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  height?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_record?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "body_info_data_histories" */
export enum Body_Info_Data_Histories_Constraint {
  /** unique or primary key constraint */
  BodyInfoDataHistoriesPkey = 'body_info_data_histories_pkey'
}

/** input type for incrementing numeric columns in table "body_info_data_histories" */
export type Body_Info_Data_Histories_Inc_Input = {
  body_fat_percentage?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "body_info_data_histories" */
export type Body_Info_Data_Histories_Insert_Input = {
  body_fat_percentage?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  height?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  is_record?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** response of any mutation on the table "body_info_data_histories" */
export type Body_Info_Data_Histories_Mutation_Response = {
  __typename?: 'body_info_data_histories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Body_Info_Data_Histories>;
};

/** on_conflict condition type for table "body_info_data_histories" */
export type Body_Info_Data_Histories_On_Conflict = {
  constraint: Body_Info_Data_Histories_Constraint;
  update_columns?: Array<Body_Info_Data_Histories_Update_Column>;
  where?: InputMaybe<Body_Info_Data_Histories_Bool_Exp>;
};

/** Ordering options when selecting data from "body_info_data_histories". */
export type Body_Info_Data_Histories_Order_By = {
  body_fat_percentage?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_record?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: body_info_data_histories */
export type Body_Info_Data_Histories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "body_info_data_histories" */
export enum Body_Info_Data_Histories_Select_Column {
  /** column name */
  BodyFatPercentage = 'body_fat_percentage',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  IsRecord = 'is_record',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "body_info_data_histories" */
export type Body_Info_Data_Histories_Set_Input = {
  body_fat_percentage?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  height?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  is_record?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** update columns of table "body_info_data_histories" */
export enum Body_Info_Data_Histories_Update_Column {
  /** column name */
  BodyFatPercentage = 'body_fat_percentage',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  IsRecord = 'is_record',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Weight = 'weight'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "body_info_data_histories" */
  delete_body_info_data_histories?: Maybe<Body_Info_Data_Histories_Mutation_Response>;
  /** delete single row from the table: "body_info_data_histories" */
  delete_body_info_data_histories_by_pk?: Maybe<Body_Info_Data_Histories>;
  /** delete data from the table: "trainings" */
  delete_trainings?: Maybe<Trainings_Mutation_Response>;
  /** delete single row from the table: "trainings" */
  delete_trainings_by_pk?: Maybe<Trainings>;
  /** insert data into the table: "body_info_data_histories" */
  insert_body_info_data_histories?: Maybe<Body_Info_Data_Histories_Mutation_Response>;
  /** insert a single row into the table: "body_info_data_histories" */
  insert_body_info_data_histories_one?: Maybe<Body_Info_Data_Histories>;
  /** insert data into the table: "trainings" */
  insert_trainings?: Maybe<Trainings_Mutation_Response>;
  /** insert a single row into the table: "trainings" */
  insert_trainings_one?: Maybe<Trainings>;
  /** update data of the table: "body_info_data_histories" */
  update_body_info_data_histories?: Maybe<Body_Info_Data_Histories_Mutation_Response>;
  /** update single row of the table: "body_info_data_histories" */
  update_body_info_data_histories_by_pk?: Maybe<Body_Info_Data_Histories>;
  /** update data of the table: "trainings" */
  update_trainings?: Maybe<Trainings_Mutation_Response>;
  /** update single row of the table: "trainings" */
  update_trainings_by_pk?: Maybe<Trainings>;
};


/** mutation root */
export type Mutation_RootDelete_Body_Info_Data_HistoriesArgs = {
  where: Body_Info_Data_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Body_Info_Data_Histories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TrainingsArgs = {
  where: Trainings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trainings_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Body_Info_Data_HistoriesArgs = {
  objects: Array<Body_Info_Data_Histories_Insert_Input>;
  on_conflict?: InputMaybe<Body_Info_Data_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Body_Info_Data_Histories_OneArgs = {
  object: Body_Info_Data_Histories_Insert_Input;
  on_conflict?: InputMaybe<Body_Info_Data_Histories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TrainingsArgs = {
  objects: Array<Trainings_Insert_Input>;
  on_conflict?: InputMaybe<Trainings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trainings_OneArgs = {
  object: Trainings_Insert_Input;
  on_conflict?: InputMaybe<Trainings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Body_Info_Data_HistoriesArgs = {
  _inc?: InputMaybe<Body_Info_Data_Histories_Inc_Input>;
  _set?: InputMaybe<Body_Info_Data_Histories_Set_Input>;
  where: Body_Info_Data_Histories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Body_Info_Data_Histories_By_PkArgs = {
  _inc?: InputMaybe<Body_Info_Data_Histories_Inc_Input>;
  _set?: InputMaybe<Body_Info_Data_Histories_Set_Input>;
  pk_columns: Body_Info_Data_Histories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TrainingsArgs = {
  _inc?: InputMaybe<Trainings_Inc_Input>;
  _set?: InputMaybe<Trainings_Set_Input>;
  where: Trainings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trainings_By_PkArgs = {
  _inc?: InputMaybe<Trainings_Inc_Input>;
  _set?: InputMaybe<Trainings_Set_Input>;
  pk_columns: Trainings_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "body_info_data_histories" */
  body_info_data_histories: Array<Body_Info_Data_Histories>;
  /** fetch data from the table: "body_info_data_histories" using primary key columns */
  body_info_data_histories_by_pk?: Maybe<Body_Info_Data_Histories>;
  /** fetch data from the table: "training_categories" */
  training_categories: Array<Training_Categories>;
  /** fetch data from the table: "training_categories" using primary key columns */
  training_categories_by_pk?: Maybe<Training_Categories>;
  /** An array relationship */
  training_types: Array<Training_Types>;
  /** fetch data from the table: "training_types" using primary key columns */
  training_types_by_pk?: Maybe<Training_Types>;
  /** An array relationship */
  trainings: Array<Trainings>;
  /** fetch data from the table: "trainings" using primary key columns */
  trainings_by_pk?: Maybe<Trainings>;
};


export type Query_RootBody_Info_Data_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Body_Info_Data_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Body_Info_Data_Histories_Order_By>>;
  where?: InputMaybe<Body_Info_Data_Histories_Bool_Exp>;
};


export type Query_RootBody_Info_Data_Histories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTraining_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Training_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Training_Categories_Order_By>>;
  where?: InputMaybe<Training_Categories_Bool_Exp>;
};


export type Query_RootTraining_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTraining_TypesArgs = {
  distinct_on?: InputMaybe<Array<Training_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Training_Types_Order_By>>;
  where?: InputMaybe<Training_Types_Bool_Exp>;
};


export type Query_RootTraining_Types_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTrainingsArgs = {
  distinct_on?: InputMaybe<Array<Trainings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trainings_Order_By>>;
  where?: InputMaybe<Trainings_Bool_Exp>;
};


export type Query_RootTrainings_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "body_info_data_histories" */
  body_info_data_histories: Array<Body_Info_Data_Histories>;
  /** fetch data from the table: "body_info_data_histories" using primary key columns */
  body_info_data_histories_by_pk?: Maybe<Body_Info_Data_Histories>;
  /** fetch data from the table: "training_categories" */
  training_categories: Array<Training_Categories>;
  /** fetch data from the table: "training_categories" using primary key columns */
  training_categories_by_pk?: Maybe<Training_Categories>;
  /** An array relationship */
  training_types: Array<Training_Types>;
  /** fetch data from the table: "training_types" using primary key columns */
  training_types_by_pk?: Maybe<Training_Types>;
  /** An array relationship */
  trainings: Array<Trainings>;
  /** fetch data from the table: "trainings" using primary key columns */
  trainings_by_pk?: Maybe<Trainings>;
};


export type Subscription_RootBody_Info_Data_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Body_Info_Data_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Body_Info_Data_Histories_Order_By>>;
  where?: InputMaybe<Body_Info_Data_Histories_Bool_Exp>;
};


export type Subscription_RootBody_Info_Data_Histories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTraining_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Training_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Training_Categories_Order_By>>;
  where?: InputMaybe<Training_Categories_Bool_Exp>;
};


export type Subscription_RootTraining_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTraining_TypesArgs = {
  distinct_on?: InputMaybe<Array<Training_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Training_Types_Order_By>>;
  where?: InputMaybe<Training_Types_Bool_Exp>;
};


export type Subscription_RootTraining_Types_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTrainingsArgs = {
  distinct_on?: InputMaybe<Array<Trainings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trainings_Order_By>>;
  where?: InputMaybe<Trainings_Bool_Exp>;
};


export type Subscription_RootTrainings_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "training_categories" */
export type Training_Categories = {
  __typename?: 'training_categories';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  training_types: Array<Training_Types>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "training_categories" */
export type Training_CategoriesTraining_TypesArgs = {
  distinct_on?: InputMaybe<Array<Training_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Training_Types_Order_By>>;
  where?: InputMaybe<Training_Types_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "training_categories". All fields are combined with a logical 'AND'. */
export type Training_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Training_Categories_Bool_Exp>>;
  _not?: InputMaybe<Training_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Training_Categories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  training_types?: InputMaybe<Training_Types_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "training_categories". */
export type Training_Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  training_types_aggregate?: InputMaybe<Training_Types_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "training_categories" */
export enum Training_Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "training_types" */
export type Training_Types = {
  __typename?: 'training_types';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  max_weight?: Maybe<Scalars['numeric']>;
  min_weight?: Maybe<Scalars['numeric']>;
  name: Scalars['String'];
  /** An object relationship */
  training_category: Training_Categories;
  training_category_id: Scalars['Int'];
  /** An array relationship */
  trainings: Array<Trainings>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "training_types" */
export type Training_TypesTrainingsArgs = {
  distinct_on?: InputMaybe<Array<Trainings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trainings_Order_By>>;
  where?: InputMaybe<Trainings_Bool_Exp>;
};

/** order by aggregate values of table "training_types" */
export type Training_Types_Aggregate_Order_By = {
  avg?: InputMaybe<Training_Types_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Training_Types_Max_Order_By>;
  min?: InputMaybe<Training_Types_Min_Order_By>;
  stddev?: InputMaybe<Training_Types_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Training_Types_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Training_Types_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Training_Types_Sum_Order_By>;
  var_pop?: InputMaybe<Training_Types_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Training_Types_Var_Samp_Order_By>;
  variance?: InputMaybe<Training_Types_Variance_Order_By>;
};

/** order by avg() on columns of table "training_types" */
export type Training_Types_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "training_types". All fields are combined with a logical 'AND'. */
export type Training_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Training_Types_Bool_Exp>>;
  _not?: InputMaybe<Training_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Training_Types_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  max_weight?: InputMaybe<Numeric_Comparison_Exp>;
  min_weight?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  training_category?: InputMaybe<Training_Categories_Bool_Exp>;
  training_category_id?: InputMaybe<Int_Comparison_Exp>;
  trainings?: InputMaybe<Trainings_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "training_types" */
export type Training_Types_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "training_types" */
export type Training_Types_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "training_types". */
export type Training_Types_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  training_category?: InputMaybe<Training_Categories_Order_By>;
  training_category_id?: InputMaybe<Order_By>;
  trainings_aggregate?: InputMaybe<Trainings_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "training_types" */
export enum Training_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MaxWeight = 'max_weight',
  /** column name */
  MinWeight = 'min_weight',
  /** column name */
  Name = 'name',
  /** column name */
  TrainingCategoryId = 'training_category_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by stddev() on columns of table "training_types" */
export type Training_Types_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "training_types" */
export type Training_Types_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "training_types" */
export type Training_Types_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "training_types" */
export type Training_Types_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "training_types" */
export type Training_Types_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "training_types" */
export type Training_Types_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "training_types" */
export type Training_Types_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  max_weight?: InputMaybe<Order_By>;
  min_weight?: InputMaybe<Order_By>;
  training_category_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "trainings" */
export type Trainings = {
  __typename?: 'trainings';
  created_at: Scalars['timestamptz'];
  date: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_finish: Scalars['Boolean'];
  training_count?: Maybe<Scalars['Int']>;
  training_set?: Maybe<Scalars['Int']>;
  /** An object relationship */
  training_type: Training_Types;
  training_type_id: Scalars['Int'];
  training_weight?: Maybe<Scalars['numeric']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['String'];
};

/** order by aggregate values of table "trainings" */
export type Trainings_Aggregate_Order_By = {
  avg?: InputMaybe<Trainings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trainings_Max_Order_By>;
  min?: InputMaybe<Trainings_Min_Order_By>;
  stddev?: InputMaybe<Trainings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trainings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trainings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trainings_Sum_Order_By>;
  var_pop?: InputMaybe<Trainings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trainings_Var_Samp_Order_By>;
  variance?: InputMaybe<Trainings_Variance_Order_By>;
};

/** order by avg() on columns of table "trainings" */
export type Trainings_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trainings". All fields are combined with a logical 'AND'. */
export type Trainings_Bool_Exp = {
  _and?: InputMaybe<Array<Trainings_Bool_Exp>>;
  _not?: InputMaybe<Trainings_Bool_Exp>;
  _or?: InputMaybe<Array<Trainings_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_finish?: InputMaybe<Boolean_Comparison_Exp>;
  training_count?: InputMaybe<Int_Comparison_Exp>;
  training_set?: InputMaybe<Int_Comparison_Exp>;
  training_type?: InputMaybe<Training_Types_Bool_Exp>;
  training_type_id?: InputMaybe<Int_Comparison_Exp>;
  training_weight?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "trainings" */
export enum Trainings_Constraint {
  /** unique or primary key constraint */
  TrainingsPkey = 'trainings_pkey'
}

/** input type for incrementing numeric columns in table "trainings" */
export type Trainings_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  training_count?: InputMaybe<Scalars['Int']>;
  training_set?: InputMaybe<Scalars['Int']>;
  training_type_id?: InputMaybe<Scalars['Int']>;
  training_weight?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "trainings" */
export type Trainings_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_finish?: InputMaybe<Scalars['Boolean']>;
  training_count?: InputMaybe<Scalars['Int']>;
  training_set?: InputMaybe<Scalars['Int']>;
  training_type_id?: InputMaybe<Scalars['Int']>;
  training_weight?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "trainings" */
export type Trainings_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "trainings" */
export type Trainings_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trainings" */
export type Trainings_Mutation_Response = {
  __typename?: 'trainings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trainings>;
};

/** on_conflict condition type for table "trainings" */
export type Trainings_On_Conflict = {
  constraint: Trainings_Constraint;
  update_columns?: Array<Trainings_Update_Column>;
  where?: InputMaybe<Trainings_Bool_Exp>;
};

/** Ordering options when selecting data from "trainings". */
export type Trainings_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_finish?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type?: InputMaybe<Training_Types_Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trainings */
export type Trainings_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "trainings" */
export enum Trainings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  IsFinish = 'is_finish',
  /** column name */
  TrainingCount = 'training_count',
  /** column name */
  TrainingSet = 'training_set',
  /** column name */
  TrainingTypeId = 'training_type_id',
  /** column name */
  TrainingWeight = 'training_weight',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "trainings" */
export type Trainings_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_finish?: InputMaybe<Scalars['Boolean']>;
  training_count?: InputMaybe<Scalars['Int']>;
  training_set?: InputMaybe<Scalars['Int']>;
  training_type_id?: InputMaybe<Scalars['Int']>;
  training_weight?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** order by stddev() on columns of table "trainings" */
export type Trainings_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "trainings" */
export type Trainings_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "trainings" */
export type Trainings_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "trainings" */
export type Trainings_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
};

/** update columns of table "trainings" */
export enum Trainings_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  IsFinish = 'is_finish',
  /** column name */
  TrainingCount = 'training_count',
  /** column name */
  TrainingSet = 'training_set',
  /** column name */
  TrainingTypeId = 'training_type_id',
  /** column name */
  TrainingWeight = 'training_weight',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** order by var_pop() on columns of table "trainings" */
export type Trainings_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "trainings" */
export type Trainings_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "trainings" */
export type Trainings_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
};

export type CreateBodyInfoHistoriesMutationVariables = Exact<{
  height?: InputMaybe<Scalars['numeric']>;
  weight: Scalars['numeric'];
  body_fat_percentage?: InputMaybe<Scalars['Int']>;
  date: Scalars['timestamptz'];
  is_record: Scalars['Boolean'];
}>;


export type CreateBodyInfoHistoriesMutation = { __typename?: 'mutation_root', insert_body_info_data_histories_one?: { __typename?: 'body_info_data_histories', id: number } | null };

export type CreateTrainingMutationVariables = Exact<{
  training_type_id: Scalars['Int'];
  training_weight: Scalars['numeric'];
  training_count: Scalars['Int'];
  training_set: Scalars['Int'];
  is_finish: Scalars['Boolean'];
  date: Scalars['timestamptz'];
}>;


export type CreateTrainingMutation = { __typename?: 'mutation_root', insert_trainings_one?: { __typename?: 'trainings', id: number } | null };

export type UpdateTrainingIsFinishMutationVariables = Exact<{
  id: Scalars['Int'];
  is_finish: Scalars['Boolean'];
}>;


export type UpdateTrainingIsFinishMutation = { __typename?: 'mutation_root', update_trainings_by_pk?: { __typename?: 'trainings', id: number } | null };

export type DeleteTrainingMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTrainingMutation = { __typename?: 'mutation_root', delete_trainings_by_pk?: { __typename?: 'trainings', id: number } | null };

export type GetTrainingOneTypeQueryVariables = Exact<{
  gteDate: Scalars['timestamptz'];
  lteDate: Scalars['timestamptz'];
}>;


export type GetTrainingOneTypeQuery = { __typename?: 'query_root', trainings: Array<{ __typename?: 'trainings', id: number, user_id: string, training_type_id: number, training_weight?: number | null, training_count?: number | null, training_set?: number | null, is_finish: boolean, date: string, training_type: { __typename?: 'training_types', id: number, name: string } }> };

export type GetTrainingTrainingTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainingTrainingTypeQuery = { __typename?: 'query_root', trainings: Array<{ __typename?: 'trainings', id: number, user_id: string, training_type_id: number, training_weight?: number | null, training_count?: number | null, training_set?: number | null, is_finish: boolean, date: string, training_type: { __typename?: 'training_types', id: number, name: string } }> };

export type GetTrainingCategoryWithTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainingCategoryWithTypeQuery = { __typename?: 'query_root', training_categories: Array<{ __typename?: 'training_categories', id: number, name: string }>, training_types: Array<{ __typename?: 'training_types', id: number, name: string, training_category_id: number }> };

export type GetTrainingWithBodyInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainingWithBodyInfoQuery = { __typename?: 'query_root', trainings: Array<{ __typename?: 'trainings', id: number, user_id: string, training_type_id: number, training_weight?: number | null, training_count?: number | null, training_set?: number | null, is_finish: boolean, date: string }>, body_info_data_histories: Array<{ __typename?: 'body_info_data_histories', id: number, user_id: string, weight: number, date: string, is_record: boolean }> };

export type GetTrainingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainingQuery = { __typename?: 'query_root', trainings: Array<{ __typename?: 'trainings', id: number, user_id: string, training_type_id: number, training_weight?: number | null, training_count?: number | null, training_set?: number | null, is_finish: boolean, date: string }> };

export type GetBodyInfoDataHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBodyInfoDataHistoryQuery = { __typename?: 'query_root', body_info_data_histories: Array<{ __typename?: 'body_info_data_histories', id: number, user_id: string, height?: number | null, weight: number, body_fat_percentage?: number | null, date: string, is_record: boolean }> };


export const CreateBodyInfoHistoriesDocument = gql`
    mutation CreateBodyInfoHistories($height: numeric, $weight: numeric!, $body_fat_percentage: Int, $date: timestamptz!, $is_record: Boolean!) {
  insert_body_info_data_histories_one(
    object: {height: $height, body_fat_percentage: $body_fat_percentage, date: $date, weight: $weight, is_record: $is_record}
  ) {
    id
  }
}
    `;
export type CreateBodyInfoHistoriesMutationFn = Apollo.MutationFunction<CreateBodyInfoHistoriesMutation, CreateBodyInfoHistoriesMutationVariables>;

/**
 * __useCreateBodyInfoHistoriesMutation__
 *
 * To run a mutation, you first call `useCreateBodyInfoHistoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBodyInfoHistoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBodyInfoHistoriesMutation, { data, loading, error }] = useCreateBodyInfoHistoriesMutation({
 *   variables: {
 *      height: // value for 'height'
 *      weight: // value for 'weight'
 *      body_fat_percentage: // value for 'body_fat_percentage'
 *      date: // value for 'date'
 *      is_record: // value for 'is_record'
 *   },
 * });
 */
export function useCreateBodyInfoHistoriesMutation(baseOptions?: Apollo.MutationHookOptions<CreateBodyInfoHistoriesMutation, CreateBodyInfoHistoriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBodyInfoHistoriesMutation, CreateBodyInfoHistoriesMutationVariables>(CreateBodyInfoHistoriesDocument, options);
      }
export type CreateBodyInfoHistoriesMutationHookResult = ReturnType<typeof useCreateBodyInfoHistoriesMutation>;
export type CreateBodyInfoHistoriesMutationResult = Apollo.MutationResult<CreateBodyInfoHistoriesMutation>;
export type CreateBodyInfoHistoriesMutationOptions = Apollo.BaseMutationOptions<CreateBodyInfoHistoriesMutation, CreateBodyInfoHistoriesMutationVariables>;
export const CreateTrainingDocument = gql`
    mutation CreateTraining($training_type_id: Int!, $training_weight: numeric!, $training_count: Int!, $training_set: Int!, $is_finish: Boolean!, $date: timestamptz!) {
  insert_trainings_one(
    object: {training_type_id: $training_type_id, training_weight: $training_weight, training_count: $training_count, training_set: $training_set, is_finish: $is_finish, date: $date}
  ) {
    id
  }
}
    `;
export type CreateTrainingMutationFn = Apollo.MutationFunction<CreateTrainingMutation, CreateTrainingMutationVariables>;

/**
 * __useCreateTrainingMutation__
 *
 * To run a mutation, you first call `useCreateTrainingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTrainingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTrainingMutation, { data, loading, error }] = useCreateTrainingMutation({
 *   variables: {
 *      training_type_id: // value for 'training_type_id'
 *      training_weight: // value for 'training_weight'
 *      training_count: // value for 'training_count'
 *      training_set: // value for 'training_set'
 *      is_finish: // value for 'is_finish'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useCreateTrainingMutation(baseOptions?: Apollo.MutationHookOptions<CreateTrainingMutation, CreateTrainingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTrainingMutation, CreateTrainingMutationVariables>(CreateTrainingDocument, options);
      }
export type CreateTrainingMutationHookResult = ReturnType<typeof useCreateTrainingMutation>;
export type CreateTrainingMutationResult = Apollo.MutationResult<CreateTrainingMutation>;
export type CreateTrainingMutationOptions = Apollo.BaseMutationOptions<CreateTrainingMutation, CreateTrainingMutationVariables>;
export const UpdateTrainingIsFinishDocument = gql`
    mutation UpdateTrainingIsFinish($id: Int!, $is_finish: Boolean!) {
  update_trainings_by_pk(pk_columns: {id: $id}, _set: {is_finish: $is_finish}) {
    id
  }
}
    `;
export type UpdateTrainingIsFinishMutationFn = Apollo.MutationFunction<UpdateTrainingIsFinishMutation, UpdateTrainingIsFinishMutationVariables>;

/**
 * __useUpdateTrainingIsFinishMutation__
 *
 * To run a mutation, you first call `useUpdateTrainingIsFinishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrainingIsFinishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrainingIsFinishMutation, { data, loading, error }] = useUpdateTrainingIsFinishMutation({
 *   variables: {
 *      id: // value for 'id'
 *      is_finish: // value for 'is_finish'
 *   },
 * });
 */
export function useUpdateTrainingIsFinishMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTrainingIsFinishMutation, UpdateTrainingIsFinishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTrainingIsFinishMutation, UpdateTrainingIsFinishMutationVariables>(UpdateTrainingIsFinishDocument, options);
      }
export type UpdateTrainingIsFinishMutationHookResult = ReturnType<typeof useUpdateTrainingIsFinishMutation>;
export type UpdateTrainingIsFinishMutationResult = Apollo.MutationResult<UpdateTrainingIsFinishMutation>;
export type UpdateTrainingIsFinishMutationOptions = Apollo.BaseMutationOptions<UpdateTrainingIsFinishMutation, UpdateTrainingIsFinishMutationVariables>;
export const DeleteTrainingDocument = gql`
    mutation DeleteTraining($id: Int!) {
  delete_trainings_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteTrainingMutationFn = Apollo.MutationFunction<DeleteTrainingMutation, DeleteTrainingMutationVariables>;

/**
 * __useDeleteTrainingMutation__
 *
 * To run a mutation, you first call `useDeleteTrainingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTrainingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTrainingMutation, { data, loading, error }] = useDeleteTrainingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTrainingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTrainingMutation, DeleteTrainingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTrainingMutation, DeleteTrainingMutationVariables>(DeleteTrainingDocument, options);
      }
export type DeleteTrainingMutationHookResult = ReturnType<typeof useDeleteTrainingMutation>;
export type DeleteTrainingMutationResult = Apollo.MutationResult<DeleteTrainingMutation>;
export type DeleteTrainingMutationOptions = Apollo.BaseMutationOptions<DeleteTrainingMutation, DeleteTrainingMutationVariables>;
export const GetTrainingOneTypeDocument = gql`
    query GetTrainingOneType($gteDate: timestamptz!, $lteDate: timestamptz!) {
  trainings(where: {date: {_gte: $gteDate, _lte: $lteDate}}) {
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

/**
 * __useGetTrainingOneTypeQuery__
 *
 * To run a query within a React component, call `useGetTrainingOneTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrainingOneTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrainingOneTypeQuery({
 *   variables: {
 *      gteDate: // value for 'gteDate'
 *      lteDate: // value for 'lteDate'
 *   },
 * });
 */
export function useGetTrainingOneTypeQuery(baseOptions: Apollo.QueryHookOptions<GetTrainingOneTypeQuery, GetTrainingOneTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrainingOneTypeQuery, GetTrainingOneTypeQueryVariables>(GetTrainingOneTypeDocument, options);
      }
export function useGetTrainingOneTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrainingOneTypeQuery, GetTrainingOneTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrainingOneTypeQuery, GetTrainingOneTypeQueryVariables>(GetTrainingOneTypeDocument, options);
        }
export type GetTrainingOneTypeQueryHookResult = ReturnType<typeof useGetTrainingOneTypeQuery>;
export type GetTrainingOneTypeLazyQueryHookResult = ReturnType<typeof useGetTrainingOneTypeLazyQuery>;
export type GetTrainingOneTypeQueryResult = Apollo.QueryResult<GetTrainingOneTypeQuery, GetTrainingOneTypeQueryVariables>;
export const GetTrainingTrainingTypeDocument = gql`
    query GetTrainingTrainingType {
  trainings {
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

/**
 * __useGetTrainingTrainingTypeQuery__
 *
 * To run a query within a React component, call `useGetTrainingTrainingTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrainingTrainingTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrainingTrainingTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrainingTrainingTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetTrainingTrainingTypeQuery, GetTrainingTrainingTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrainingTrainingTypeQuery, GetTrainingTrainingTypeQueryVariables>(GetTrainingTrainingTypeDocument, options);
      }
export function useGetTrainingTrainingTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrainingTrainingTypeQuery, GetTrainingTrainingTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrainingTrainingTypeQuery, GetTrainingTrainingTypeQueryVariables>(GetTrainingTrainingTypeDocument, options);
        }
export type GetTrainingTrainingTypeQueryHookResult = ReturnType<typeof useGetTrainingTrainingTypeQuery>;
export type GetTrainingTrainingTypeLazyQueryHookResult = ReturnType<typeof useGetTrainingTrainingTypeLazyQuery>;
export type GetTrainingTrainingTypeQueryResult = Apollo.QueryResult<GetTrainingTrainingTypeQuery, GetTrainingTrainingTypeQueryVariables>;
export const GetTrainingCategoryWithTypeDocument = gql`
    query GetTrainingCategoryWithType {
  training_categories(order_by: {id: asc}) {
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

/**
 * __useGetTrainingCategoryWithTypeQuery__
 *
 * To run a query within a React component, call `useGetTrainingCategoryWithTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrainingCategoryWithTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrainingCategoryWithTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrainingCategoryWithTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetTrainingCategoryWithTypeQuery, GetTrainingCategoryWithTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrainingCategoryWithTypeQuery, GetTrainingCategoryWithTypeQueryVariables>(GetTrainingCategoryWithTypeDocument, options);
      }
export function useGetTrainingCategoryWithTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrainingCategoryWithTypeQuery, GetTrainingCategoryWithTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrainingCategoryWithTypeQuery, GetTrainingCategoryWithTypeQueryVariables>(GetTrainingCategoryWithTypeDocument, options);
        }
export type GetTrainingCategoryWithTypeQueryHookResult = ReturnType<typeof useGetTrainingCategoryWithTypeQuery>;
export type GetTrainingCategoryWithTypeLazyQueryHookResult = ReturnType<typeof useGetTrainingCategoryWithTypeLazyQuery>;
export type GetTrainingCategoryWithTypeQueryResult = Apollo.QueryResult<GetTrainingCategoryWithTypeQuery, GetTrainingCategoryWithTypeQueryVariables>;
export const GetTrainingWithBodyInfoDocument = gql`
    query GetTrainingWithBodyInfo {
  trainings(order_by: {id: asc}) {
    id
    user_id
    training_type_id
    training_weight
    training_count
    training_set
    is_finish
    date
  }
  body_info_data_histories(order_by: {id: asc}) {
    id
    user_id
    weight
    date
    is_record
  }
}
    `;

/**
 * __useGetTrainingWithBodyInfoQuery__
 *
 * To run a query within a React component, call `useGetTrainingWithBodyInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrainingWithBodyInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrainingWithBodyInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrainingWithBodyInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetTrainingWithBodyInfoQuery, GetTrainingWithBodyInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrainingWithBodyInfoQuery, GetTrainingWithBodyInfoQueryVariables>(GetTrainingWithBodyInfoDocument, options);
      }
export function useGetTrainingWithBodyInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrainingWithBodyInfoQuery, GetTrainingWithBodyInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrainingWithBodyInfoQuery, GetTrainingWithBodyInfoQueryVariables>(GetTrainingWithBodyInfoDocument, options);
        }
export type GetTrainingWithBodyInfoQueryHookResult = ReturnType<typeof useGetTrainingWithBodyInfoQuery>;
export type GetTrainingWithBodyInfoLazyQueryHookResult = ReturnType<typeof useGetTrainingWithBodyInfoLazyQuery>;
export type GetTrainingWithBodyInfoQueryResult = Apollo.QueryResult<GetTrainingWithBodyInfoQuery, GetTrainingWithBodyInfoQueryVariables>;
export const GetTrainingDocument = gql`
    query GetTraining {
  trainings(order_by: {id: asc}) {
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

/**
 * __useGetTrainingQuery__
 *
 * To run a query within a React component, call `useGetTrainingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrainingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrainingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrainingQuery(baseOptions?: Apollo.QueryHookOptions<GetTrainingQuery, GetTrainingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrainingQuery, GetTrainingQueryVariables>(GetTrainingDocument, options);
      }
export function useGetTrainingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrainingQuery, GetTrainingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrainingQuery, GetTrainingQueryVariables>(GetTrainingDocument, options);
        }
export type GetTrainingQueryHookResult = ReturnType<typeof useGetTrainingQuery>;
export type GetTrainingLazyQueryHookResult = ReturnType<typeof useGetTrainingLazyQuery>;
export type GetTrainingQueryResult = Apollo.QueryResult<GetTrainingQuery, GetTrainingQueryVariables>;
export const GetBodyInfoDataHistoryDocument = gql`
    query GetBodyInfoDataHistory {
  body_info_data_histories(order_by: {id: asc}) {
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

/**
 * __useGetBodyInfoDataHistoryQuery__
 *
 * To run a query within a React component, call `useGetBodyInfoDataHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBodyInfoDataHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBodyInfoDataHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBodyInfoDataHistoryQuery(baseOptions?: Apollo.QueryHookOptions<GetBodyInfoDataHistoryQuery, GetBodyInfoDataHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBodyInfoDataHistoryQuery, GetBodyInfoDataHistoryQueryVariables>(GetBodyInfoDataHistoryDocument, options);
      }
export function useGetBodyInfoDataHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBodyInfoDataHistoryQuery, GetBodyInfoDataHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBodyInfoDataHistoryQuery, GetBodyInfoDataHistoryQueryVariables>(GetBodyInfoDataHistoryDocument, options);
        }
export type GetBodyInfoDataHistoryQueryHookResult = ReturnType<typeof useGetBodyInfoDataHistoryQuery>;
export type GetBodyInfoDataHistoryLazyQueryHookResult = ReturnType<typeof useGetBodyInfoDataHistoryLazyQuery>;
export type GetBodyInfoDataHistoryQueryResult = Apollo.QueryResult<GetBodyInfoDataHistoryQuery, GetBodyInfoDataHistoryQueryVariables>;