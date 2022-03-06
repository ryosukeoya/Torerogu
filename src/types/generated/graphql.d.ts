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
  date: any;
  numeric: any;
  timestamptz: any;
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
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
  weight: Scalars['numeric'];
};

/** aggregated selection of "body_info_data_histories" */
export type Body_Info_Data_Histories_Aggregate = {
  __typename?: 'body_info_data_histories_aggregate';
  aggregate?: Maybe<Body_Info_Data_Histories_Aggregate_Fields>;
  nodes: Array<Body_Info_Data_Histories>;
};

/** aggregate fields of "body_info_data_histories" */
export type Body_Info_Data_Histories_Aggregate_Fields = {
  __typename?: 'body_info_data_histories_aggregate_fields';
  avg?: Maybe<Body_Info_Data_Histories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Body_Info_Data_Histories_Max_Fields>;
  min?: Maybe<Body_Info_Data_Histories_Min_Fields>;
  stddev?: Maybe<Body_Info_Data_Histories_Stddev_Fields>;
  stddev_pop?: Maybe<Body_Info_Data_Histories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Body_Info_Data_Histories_Stddev_Samp_Fields>;
  sum?: Maybe<Body_Info_Data_Histories_Sum_Fields>;
  var_pop?: Maybe<Body_Info_Data_Histories_Var_Pop_Fields>;
  var_samp?: Maybe<Body_Info_Data_Histories_Var_Samp_Fields>;
  variance?: Maybe<Body_Info_Data_Histories_Variance_Fields>;
};


/** aggregate fields of "body_info_data_histories" */
export type Body_Info_Data_Histories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Body_Info_Data_Histories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Body_Info_Data_Histories_Avg_Fields = {
  __typename?: 'body_info_data_histories_avg_fields';
  body_fat_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
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
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
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
  user_id?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "body_info_data_histories" */
export type Body_Info_Data_Histories_Insert_Input = {
  body_fat_percentage?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date?: InputMaybe<Scalars['timestamptz']>;
  height?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Body_Info_Data_Histories_Max_Fields = {
  __typename?: 'body_info_data_histories_max_fields';
  body_fat_percentage?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Body_Info_Data_Histories_Min_Fields = {
  __typename?: 'body_info_data_histories_min_fields';
  body_fat_percentage?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['numeric']>;
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
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Body_Info_Data_Histories_Stddev_Fields = {
  __typename?: 'body_info_data_histories_stddev_fields';
  body_fat_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Body_Info_Data_Histories_Stddev_Pop_Fields = {
  __typename?: 'body_info_data_histories_stddev_pop_fields';
  body_fat_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Body_Info_Data_Histories_Stddev_Samp_Fields = {
  __typename?: 'body_info_data_histories_stddev_samp_fields';
  body_fat_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Body_Info_Data_Histories_Sum_Fields = {
  __typename?: 'body_info_data_histories_sum_fields';
  body_fat_percentage?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['numeric']>;
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
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Body_Info_Data_Histories_Var_Pop_Fields = {
  __typename?: 'body_info_data_histories_var_pop_fields';
  body_fat_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Body_Info_Data_Histories_Var_Samp_Fields = {
  __typename?: 'body_info_data_histories_var_samp_fields';
  body_fat_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Body_Info_Data_Histories_Variance_Fields = {
  __typename?: 'body_info_data_histories_variance_fields';
  body_fat_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "body_info_data_histories" */
  delete_body_info_data_histories?: Maybe<Body_Info_Data_Histories_Mutation_Response>;
  /** delete single row from the table: "body_info_data_histories" */
  delete_body_info_data_histories_by_pk?: Maybe<Body_Info_Data_Histories>;
  /** delete data from the table: "training_categories" */
  delete_training_categories?: Maybe<Training_Categories_Mutation_Response>;
  /** delete single row from the table: "training_categories" */
  delete_training_categories_by_pk?: Maybe<Training_Categories>;
  /** delete data from the table: "training_types" */
  delete_training_types?: Maybe<Training_Types_Mutation_Response>;
  /** delete single row from the table: "training_types" */
  delete_training_types_by_pk?: Maybe<Training_Types>;
  /** delete data from the table: "trainings" */
  delete_trainings?: Maybe<Trainings_Mutation_Response>;
  /** delete single row from the table: "trainings" */
  delete_trainings_by_pk?: Maybe<Trainings>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "body_info_data_histories" */
  insert_body_info_data_histories?: Maybe<Body_Info_Data_Histories_Mutation_Response>;
  /** insert a single row into the table: "body_info_data_histories" */
  insert_body_info_data_histories_one?: Maybe<Body_Info_Data_Histories>;
  /** insert data into the table: "training_categories" */
  insert_training_categories?: Maybe<Training_Categories_Mutation_Response>;
  /** insert a single row into the table: "training_categories" */
  insert_training_categories_one?: Maybe<Training_Categories>;
  /** insert data into the table: "training_types" */
  insert_training_types?: Maybe<Training_Types_Mutation_Response>;
  /** insert a single row into the table: "training_types" */
  insert_training_types_one?: Maybe<Training_Types>;
  /** insert data into the table: "trainings" */
  insert_trainings?: Maybe<Trainings_Mutation_Response>;
  /** insert a single row into the table: "trainings" */
  insert_trainings_one?: Maybe<Trainings>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "body_info_data_histories" */
  update_body_info_data_histories?: Maybe<Body_Info_Data_Histories_Mutation_Response>;
  /** update single row of the table: "body_info_data_histories" */
  update_body_info_data_histories_by_pk?: Maybe<Body_Info_Data_Histories>;
  /** update data of the table: "training_categories" */
  update_training_categories?: Maybe<Training_Categories_Mutation_Response>;
  /** update single row of the table: "training_categories" */
  update_training_categories_by_pk?: Maybe<Training_Categories>;
  /** update data of the table: "training_types" */
  update_training_types?: Maybe<Training_Types_Mutation_Response>;
  /** update single row of the table: "training_types" */
  update_training_types_by_pk?: Maybe<Training_Types>;
  /** update data of the table: "trainings" */
  update_trainings?: Maybe<Trainings_Mutation_Response>;
  /** update single row of the table: "trainings" */
  update_trainings_by_pk?: Maybe<Trainings>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
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
export type Mutation_RootDelete_Training_CategoriesArgs = {
  where: Training_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Training_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Training_TypesArgs = {
  where: Training_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Training_Types_By_PkArgs = {
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
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
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
export type Mutation_RootInsert_Training_CategoriesArgs = {
  objects: Array<Training_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Training_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Training_Categories_OneArgs = {
  object: Training_Categories_Insert_Input;
  on_conflict?: InputMaybe<Training_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Training_TypesArgs = {
  objects: Array<Training_Types_Insert_Input>;
  on_conflict?: InputMaybe<Training_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Training_Types_OneArgs = {
  object: Training_Types_Insert_Input;
  on_conflict?: InputMaybe<Training_Types_On_Conflict>;
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
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
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
export type Mutation_RootUpdate_Training_CategoriesArgs = {
  _inc?: InputMaybe<Training_Categories_Inc_Input>;
  _set?: InputMaybe<Training_Categories_Set_Input>;
  where: Training_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Training_Categories_By_PkArgs = {
  _inc?: InputMaybe<Training_Categories_Inc_Input>;
  _set?: InputMaybe<Training_Categories_Set_Input>;
  pk_columns: Training_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Training_TypesArgs = {
  _inc?: InputMaybe<Training_Types_Inc_Input>;
  _set?: InputMaybe<Training_Types_Set_Input>;
  where: Training_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Training_Types_By_PkArgs = {
  _inc?: InputMaybe<Training_Types_Inc_Input>;
  _set?: InputMaybe<Training_Types_Set_Input>;
  pk_columns: Training_Types_Pk_Columns_Input;
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


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
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
  /** fetch aggregated fields from the table: "body_info_data_histories" */
  body_info_data_histories_aggregate: Body_Info_Data_Histories_Aggregate;
  /** fetch data from the table: "body_info_data_histories" using primary key columns */
  body_info_data_histories_by_pk?: Maybe<Body_Info_Data_Histories>;
  /** fetch data from the table: "training_categories" */
  training_categories: Array<Training_Categories>;
  /** fetch aggregated fields from the table: "training_categories" */
  training_categories_aggregate: Training_Categories_Aggregate;
  /** fetch data from the table: "training_categories" using primary key columns */
  training_categories_by_pk?: Maybe<Training_Categories>;
  /** fetch data from the table: "training_types" */
  training_types: Array<Training_Types>;
  /** fetch aggregated fields from the table: "training_types" */
  training_types_aggregate: Training_Types_Aggregate;
  /** fetch data from the table: "training_types" using primary key columns */
  training_types_by_pk?: Maybe<Training_Types>;
  /** fetch data from the table: "trainings" */
  trainings: Array<Trainings>;
  /** An aggregate relationship */
  trainings_aggregate: Trainings_Aggregate;
  /** fetch data from the table: "trainings" using primary key columns */
  trainings_by_pk?: Maybe<Trainings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootBody_Info_Data_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Body_Info_Data_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Body_Info_Data_Histories_Order_By>>;
  where?: InputMaybe<Body_Info_Data_Histories_Bool_Exp>;
};


export type Query_RootBody_Info_Data_Histories_AggregateArgs = {
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


export type Query_RootTraining_Categories_AggregateArgs = {
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


export type Query_RootTraining_Types_AggregateArgs = {
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


export type Query_RootTrainings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trainings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trainings_Order_By>>;
  where?: InputMaybe<Trainings_Bool_Exp>;
};


export type Query_RootTrainings_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "body_info_data_histories" */
  body_info_data_histories: Array<Body_Info_Data_Histories>;
  /** fetch aggregated fields from the table: "body_info_data_histories" */
  body_info_data_histories_aggregate: Body_Info_Data_Histories_Aggregate;
  /** fetch data from the table: "body_info_data_histories" using primary key columns */
  body_info_data_histories_by_pk?: Maybe<Body_Info_Data_Histories>;
  /** fetch data from the table: "training_categories" */
  training_categories: Array<Training_Categories>;
  /** fetch aggregated fields from the table: "training_categories" */
  training_categories_aggregate: Training_Categories_Aggregate;
  /** fetch data from the table: "training_categories" using primary key columns */
  training_categories_by_pk?: Maybe<Training_Categories>;
  /** fetch data from the table: "training_types" */
  training_types: Array<Training_Types>;
  /** fetch aggregated fields from the table: "training_types" */
  training_types_aggregate: Training_Types_Aggregate;
  /** fetch data from the table: "training_types" using primary key columns */
  training_types_by_pk?: Maybe<Training_Types>;
  /** fetch data from the table: "trainings" */
  trainings: Array<Trainings>;
  /** An aggregate relationship */
  trainings_aggregate: Trainings_Aggregate;
  /** fetch data from the table: "trainings" using primary key columns */
  trainings_by_pk?: Maybe<Trainings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootBody_Info_Data_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Body_Info_Data_Histories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Body_Info_Data_Histories_Order_By>>;
  where?: InputMaybe<Body_Info_Data_Histories_Bool_Exp>;
};


export type Subscription_RootBody_Info_Data_Histories_AggregateArgs = {
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


export type Subscription_RootTraining_Categories_AggregateArgs = {
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


export type Subscription_RootTraining_Types_AggregateArgs = {
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


export type Subscription_RootTrainings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trainings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trainings_Order_By>>;
  where?: InputMaybe<Trainings_Bool_Exp>;
};


export type Subscription_RootTrainings_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
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
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "training_categories" */
export type Training_Categories_Aggregate = {
  __typename?: 'training_categories_aggregate';
  aggregate?: Maybe<Training_Categories_Aggregate_Fields>;
  nodes: Array<Training_Categories>;
};

/** aggregate fields of "training_categories" */
export type Training_Categories_Aggregate_Fields = {
  __typename?: 'training_categories_aggregate_fields';
  avg?: Maybe<Training_Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Training_Categories_Max_Fields>;
  min?: Maybe<Training_Categories_Min_Fields>;
  stddev?: Maybe<Training_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Training_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Training_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Training_Categories_Sum_Fields>;
  var_pop?: Maybe<Training_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Training_Categories_Var_Samp_Fields>;
  variance?: Maybe<Training_Categories_Variance_Fields>;
};


/** aggregate fields of "training_categories" */
export type Training_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Training_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Training_Categories_Avg_Fields = {
  __typename?: 'training_categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "training_categories". All fields are combined with a logical 'AND'. */
export type Training_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Training_Categories_Bool_Exp>>;
  _not?: InputMaybe<Training_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Training_Categories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "training_categories" */
export enum Training_Categories_Constraint {
  /** unique or primary key constraint */
  TrainingTypesPkey = 'training_types_pkey'
}

/** input type for incrementing numeric columns in table "training_categories" */
export type Training_Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "training_categories" */
export type Training_Categories_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Training_Categories_Max_Fields = {
  __typename?: 'training_categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Training_Categories_Min_Fields = {
  __typename?: 'training_categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "training_categories" */
export type Training_Categories_Mutation_Response = {
  __typename?: 'training_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Training_Categories>;
};

/** input type for inserting object relation for remote table "training_categories" */
export type Training_Categories_Obj_Rel_Insert_Input = {
  data: Training_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Training_Categories_On_Conflict>;
};

/** on_conflict condition type for table "training_categories" */
export type Training_Categories_On_Conflict = {
  constraint: Training_Categories_Constraint;
  update_columns?: Array<Training_Categories_Update_Column>;
  where?: InputMaybe<Training_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "training_categories". */
export type Training_Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: training_categories */
export type Training_Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
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

/** input type for updating data in table "training_categories" */
export type Training_Categories_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Training_Categories_Stddev_Fields = {
  __typename?: 'training_categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Training_Categories_Stddev_Pop_Fields = {
  __typename?: 'training_categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Training_Categories_Stddev_Samp_Fields = {
  __typename?: 'training_categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Training_Categories_Sum_Fields = {
  __typename?: 'training_categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "training_categories" */
export enum Training_Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Training_Categories_Var_Pop_Fields = {
  __typename?: 'training_categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Training_Categories_Var_Samp_Fields = {
  __typename?: 'training_categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Training_Categories_Variance_Fields = {
  __typename?: 'training_categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

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
  /** fetch data from the table: "trainings" */
  trainings: Array<Trainings>;
  /** An aggregate relationship */
  trainings_aggregate: Trainings_Aggregate;
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


/** columns and relationships of "training_types" */
export type Training_TypesTrainings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trainings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trainings_Order_By>>;
  where?: InputMaybe<Trainings_Bool_Exp>;
};

/** aggregated selection of "training_types" */
export type Training_Types_Aggregate = {
  __typename?: 'training_types_aggregate';
  aggregate?: Maybe<Training_Types_Aggregate_Fields>;
  nodes: Array<Training_Types>;
};

/** aggregate fields of "training_types" */
export type Training_Types_Aggregate_Fields = {
  __typename?: 'training_types_aggregate_fields';
  avg?: Maybe<Training_Types_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Training_Types_Max_Fields>;
  min?: Maybe<Training_Types_Min_Fields>;
  stddev?: Maybe<Training_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Training_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Training_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Training_Types_Sum_Fields>;
  var_pop?: Maybe<Training_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Training_Types_Var_Samp_Fields>;
  variance?: Maybe<Training_Types_Variance_Fields>;
};


/** aggregate fields of "training_types" */
export type Training_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Training_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Training_Types_Avg_Fields = {
  __typename?: 'training_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  training_category_id?: Maybe<Scalars['Float']>;
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

/** unique or primary key constraints on table "training_types" */
export enum Training_Types_Constraint {
  /** unique or primary key constraint */
  TrainingCategoriesPkey = 'training_categories_pkey'
}

/** input type for incrementing numeric columns in table "training_types" */
export type Training_Types_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  max_weight?: InputMaybe<Scalars['numeric']>;
  min_weight?: InputMaybe<Scalars['numeric']>;
  training_category_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "training_types" */
export type Training_Types_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  max_weight?: InputMaybe<Scalars['numeric']>;
  min_weight?: InputMaybe<Scalars['numeric']>;
  name?: InputMaybe<Scalars['String']>;
  training_category?: InputMaybe<Training_Categories_Obj_Rel_Insert_Input>;
  training_category_id?: InputMaybe<Scalars['Int']>;
  trainings?: InputMaybe<Trainings_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Training_Types_Max_Fields = {
  __typename?: 'training_types_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  max_weight?: Maybe<Scalars['numeric']>;
  min_weight?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  training_category_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Training_Types_Min_Fields = {
  __typename?: 'training_types_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  max_weight?: Maybe<Scalars['numeric']>;
  min_weight?: Maybe<Scalars['numeric']>;
  name?: Maybe<Scalars['String']>;
  training_category_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "training_types" */
export type Training_Types_Mutation_Response = {
  __typename?: 'training_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Training_Types>;
};

/** input type for inserting object relation for remote table "training_types" */
export type Training_Types_Obj_Rel_Insert_Input = {
  data: Training_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Training_Types_On_Conflict>;
};

/** on_conflict condition type for table "training_types" */
export type Training_Types_On_Conflict = {
  constraint: Training_Types_Constraint;
  update_columns?: Array<Training_Types_Update_Column>;
  where?: InputMaybe<Training_Types_Bool_Exp>;
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

/** primary key columns input for table: training_types */
export type Training_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
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

/** input type for updating data in table "training_types" */
export type Training_Types_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  max_weight?: InputMaybe<Scalars['numeric']>;
  min_weight?: InputMaybe<Scalars['numeric']>;
  name?: InputMaybe<Scalars['String']>;
  training_category_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Training_Types_Stddev_Fields = {
  __typename?: 'training_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  training_category_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Training_Types_Stddev_Pop_Fields = {
  __typename?: 'training_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  training_category_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Training_Types_Stddev_Samp_Fields = {
  __typename?: 'training_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  training_category_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Training_Types_Sum_Fields = {
  __typename?: 'training_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
  max_weight?: Maybe<Scalars['numeric']>;
  min_weight?: Maybe<Scalars['numeric']>;
  training_category_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "training_types" */
export enum Training_Types_Update_Column {
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

/** aggregate var_pop on columns */
export type Training_Types_Var_Pop_Fields = {
  __typename?: 'training_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  training_category_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Training_Types_Var_Samp_Fields = {
  __typename?: 'training_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  training_category_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Training_Types_Variance_Fields = {
  __typename?: 'training_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
  max_weight?: Maybe<Scalars['Float']>;
  min_weight?: Maybe<Scalars['Float']>;
  training_category_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "trainings" */
export type Trainings = {
  __typename?: 'trainings';
  created_at: Scalars['timestamptz'];
  date: Scalars['date'];
  id: Scalars['Int'];
  is_finish: Scalars['Boolean'];
  training_count?: Maybe<Scalars['Int']>;
  training_set?: Maybe<Scalars['Int']>;
  /** An object relationship */
  training_type: Training_Types;
  training_type_id: Scalars['Int'];
  training_weight?: Maybe<Scalars['numeric']>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "trainings" */
export type Trainings_Aggregate = {
  __typename?: 'trainings_aggregate';
  aggregate?: Maybe<Trainings_Aggregate_Fields>;
  nodes: Array<Trainings>;
};

/** aggregate fields of "trainings" */
export type Trainings_Aggregate_Fields = {
  __typename?: 'trainings_aggregate_fields';
  avg?: Maybe<Trainings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Trainings_Max_Fields>;
  min?: Maybe<Trainings_Min_Fields>;
  stddev?: Maybe<Trainings_Stddev_Fields>;
  stddev_pop?: Maybe<Trainings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trainings_Stddev_Samp_Fields>;
  sum?: Maybe<Trainings_Sum_Fields>;
  var_pop?: Maybe<Trainings_Var_Pop_Fields>;
  var_samp?: Maybe<Trainings_Var_Samp_Fields>;
  variance?: Maybe<Trainings_Variance_Fields>;
};


/** aggregate fields of "trainings" */
export type Trainings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trainings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
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

/** input type for inserting array relation for remote table "trainings" */
export type Trainings_Arr_Rel_Insert_Input = {
  data: Array<Trainings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Trainings_On_Conflict>;
};

/** aggregate avg on columns */
export type Trainings_Avg_Fields = {
  __typename?: 'trainings_avg_fields';
  id?: Maybe<Scalars['Float']>;
  training_count?: Maybe<Scalars['Float']>;
  training_set?: Maybe<Scalars['Float']>;
  training_type_id?: Maybe<Scalars['Float']>;
  training_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trainings" */
export type Trainings_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trainings". All fields are combined with a logical 'AND'. */
export type Trainings_Bool_Exp = {
  _and?: InputMaybe<Array<Trainings_Bool_Exp>>;
  _not?: InputMaybe<Trainings_Bool_Exp>;
  _or?: InputMaybe<Array<Trainings_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_finish?: InputMaybe<Boolean_Comparison_Exp>;
  training_count?: InputMaybe<Int_Comparison_Exp>;
  training_set?: InputMaybe<Int_Comparison_Exp>;
  training_type?: InputMaybe<Training_Types_Bool_Exp>;
  training_type_id?: InputMaybe<Int_Comparison_Exp>;
  training_weight?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
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
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "trainings" */
export type Trainings_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  is_finish?: InputMaybe<Scalars['Boolean']>;
  training_count?: InputMaybe<Scalars['Int']>;
  training_set?: InputMaybe<Scalars['Int']>;
  training_type?: InputMaybe<Training_Types_Obj_Rel_Insert_Input>;
  training_type_id?: InputMaybe<Scalars['Int']>;
  training_weight?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Trainings_Max_Fields = {
  __typename?: 'trainings_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  training_count?: Maybe<Scalars['Int']>;
  training_set?: Maybe<Scalars['Int']>;
  training_type_id?: Maybe<Scalars['Int']>;
  training_weight?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
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

/** aggregate min on columns */
export type Trainings_Min_Fields = {
  __typename?: 'trainings_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  training_count?: Maybe<Scalars['Int']>;
  training_set?: Maybe<Scalars['Int']>;
  training_type_id?: Maybe<Scalars['Int']>;
  training_weight?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
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
  date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  is_finish?: InputMaybe<Scalars['Boolean']>;
  training_count?: InputMaybe<Scalars['Int']>;
  training_set?: InputMaybe<Scalars['Int']>;
  training_type_id?: InputMaybe<Scalars['Int']>;
  training_weight?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Trainings_Stddev_Fields = {
  __typename?: 'trainings_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  training_count?: Maybe<Scalars['Float']>;
  training_set?: Maybe<Scalars['Float']>;
  training_type_id?: Maybe<Scalars['Float']>;
  training_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trainings" */
export type Trainings_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trainings_Stddev_Pop_Fields = {
  __typename?: 'trainings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  training_count?: Maybe<Scalars['Float']>;
  training_set?: Maybe<Scalars['Float']>;
  training_type_id?: Maybe<Scalars['Float']>;
  training_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trainings" */
export type Trainings_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trainings_Stddev_Samp_Fields = {
  __typename?: 'trainings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  training_count?: Maybe<Scalars['Float']>;
  training_set?: Maybe<Scalars['Float']>;
  training_type_id?: Maybe<Scalars['Float']>;
  training_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trainings" */
export type Trainings_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Trainings_Sum_Fields = {
  __typename?: 'trainings_sum_fields';
  id?: Maybe<Scalars['Int']>;
  training_count?: Maybe<Scalars['Int']>;
  training_set?: Maybe<Scalars['Int']>;
  training_type_id?: Maybe<Scalars['Int']>;
  training_weight?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "trainings" */
export type Trainings_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
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
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Trainings_Var_Pop_Fields = {
  __typename?: 'trainings_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  training_count?: Maybe<Scalars['Float']>;
  training_set?: Maybe<Scalars['Float']>;
  training_type_id?: Maybe<Scalars['Float']>;
  training_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trainings" */
export type Trainings_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trainings_Var_Samp_Fields = {
  __typename?: 'trainings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  training_count?: Maybe<Scalars['Float']>;
  training_set?: Maybe<Scalars['Float']>;
  training_type_id?: Maybe<Scalars['Float']>;
  training_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trainings" */
export type Trainings_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trainings_Variance_Fields = {
  __typename?: 'trainings_variance_fields';
  id?: Maybe<Scalars['Float']>;
  training_count?: Maybe<Scalars['Float']>;
  training_set?: Maybe<Scalars['Float']>;
  training_type_id?: Maybe<Scalars['Float']>;
  training_weight?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trainings" */
export type Trainings_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  training_count?: InputMaybe<Order_By>;
  training_set?: InputMaybe<Order_By>;
  training_type_id?: InputMaybe<Order_By>;
  training_weight?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['Int'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type CreateBodyInfoHistoriesMutationVariables = Exact<{
  height: Scalars['numeric'];
  weight?: InputMaybe<Scalars['numeric']>;
  body_fat_percentage: Scalars['Int'];
  date?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['Int']>;
}>;


export type CreateBodyInfoHistoriesMutation = { __typename?: 'mutation_root', insert_body_info_data_histories_one?: { __typename?: 'body_info_data_histories', id: number, user_id: number, height?: any | null, weight: any, body_fat_percentage?: number | null, date: any } | null };

export type CreateTrainingMutationVariables = Exact<{
  user_id?: InputMaybe<Scalars['Int']>;
  training_type_id?: InputMaybe<Scalars['Int']>;
  training_weight: Scalars['numeric'];
  training_count: Scalars['Int'];
  training_set: Scalars['Int'];
  is_finish?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['date']>;
}>;


export type CreateTrainingMutation = { __typename?: 'mutation_root', insert_trainings_one?: { __typename?: 'trainings', id: number, user_id: number, training_type_id: number, training_weight?: any | null, training_count?: number | null, training_set?: number | null, is_finish: boolean, date: any } | null };

export type GetGraphPagePropsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGraphPagePropsQuery = { __typename?: 'query_root', trainings: Array<{ __typename?: 'trainings', id: number, user_id: number, training_type_id: number, training_weight?: any | null, training_count?: number | null, training_set?: number | null, is_finish: boolean, date: any }>, body_info_data_histories: Array<{ __typename?: 'body_info_data_histories', id: number, user_id: number, weight: any, date: any }> };

export type GetTrainingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainingQuery = { __typename?: 'query_root', trainings: Array<{ __typename?: 'trainings', id: number, user_id: number, training_type_id: number, training_weight?: any | null, training_count?: number | null, training_set?: number | null, is_finish: boolean, date: any }> };

export type GetBodyInfoDataHistoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBodyInfoDataHistoriesQuery = { __typename?: 'query_root', body_info_data_histories: Array<{ __typename?: 'body_info_data_histories', id: number, user_id: number, height?: any | null, weight: any, body_fat_percentage?: number | null, date: any }> };

export type GetHomePagePropsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePagePropsQuery = { __typename?: 'query_root', trainings: Array<{ __typename?: 'trainings', id: number, user_id: number, training_type_id: number, training_weight?: any | null, training_count?: number | null, training_set?: number | null, is_finish: boolean, date: any, training_type: { __typename?: 'training_types', id: number, name: string } }> };

export type GetRecordPagePropsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecordPagePropsQuery = { __typename?: 'query_root', training_categories: Array<{ __typename?: 'training_categories', id: number, name: string }>, training_types: Array<{ __typename?: 'training_types', id: number, name: string, training_category_id: number }> };


export const CreateBodyInfoHistoriesDocument = gql`
    mutation CreateBodyInfoHistories($height: numeric!, $weight: numeric, $body_fat_percentage: Int!, $date: timestamptz, $user_id: Int) {
  insert_body_info_data_histories_one(
    object: {height: $height, body_fat_percentage: $body_fat_percentage, date: $date, weight: $weight, user_id: $user_id}
  ) {
    id
    user_id
    height
    weight
    body_fat_percentage
    date
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
 *      user_id: // value for 'user_id'
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
    mutation CreateTraining($user_id: Int, $training_type_id: Int, $training_weight: numeric!, $training_count: Int!, $training_set: Int!, $is_finish: Boolean, $date: date) {
  insert_trainings_one(
    object: {user_id: $user_id, training_type_id: $training_type_id, training_weight: $training_weight, training_count: $training_count, training_set: $training_set, is_finish: $is_finish, date: $date}
  ) {
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
 *      user_id: // value for 'user_id'
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
export const GetGraphPagePropsDocument = gql`
    query GetGraphPageProps {
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
  }
}
    `;

/**
 * __useGetGraphPagePropsQuery__
 *
 * To run a query within a React component, call `useGetGraphPagePropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGraphPagePropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGraphPagePropsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGraphPagePropsQuery(baseOptions?: Apollo.QueryHookOptions<GetGraphPagePropsQuery, GetGraphPagePropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGraphPagePropsQuery, GetGraphPagePropsQueryVariables>(GetGraphPagePropsDocument, options);
      }
export function useGetGraphPagePropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGraphPagePropsQuery, GetGraphPagePropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGraphPagePropsQuery, GetGraphPagePropsQueryVariables>(GetGraphPagePropsDocument, options);
        }
export type GetGraphPagePropsQueryHookResult = ReturnType<typeof useGetGraphPagePropsQuery>;
export type GetGraphPagePropsLazyQueryHookResult = ReturnType<typeof useGetGraphPagePropsLazyQuery>;
export type GetGraphPagePropsQueryResult = Apollo.QueryResult<GetGraphPagePropsQuery, GetGraphPagePropsQueryVariables>;
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
export const GetBodyInfoDataHistoriesDocument = gql`
    query GetBodyInfoDataHistories {
  body_info_data_histories(order_by: {id: asc}) {
    id
    user_id
    height
    weight
    body_fat_percentage
    date
  }
}
    `;

/**
 * __useGetBodyInfoDataHistoriesQuery__
 *
 * To run a query within a React component, call `useGetBodyInfoDataHistoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBodyInfoDataHistoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBodyInfoDataHistoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBodyInfoDataHistoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetBodyInfoDataHistoriesQuery, GetBodyInfoDataHistoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBodyInfoDataHistoriesQuery, GetBodyInfoDataHistoriesQueryVariables>(GetBodyInfoDataHistoriesDocument, options);
      }
export function useGetBodyInfoDataHistoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBodyInfoDataHistoriesQuery, GetBodyInfoDataHistoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBodyInfoDataHistoriesQuery, GetBodyInfoDataHistoriesQueryVariables>(GetBodyInfoDataHistoriesDocument, options);
        }
export type GetBodyInfoDataHistoriesQueryHookResult = ReturnType<typeof useGetBodyInfoDataHistoriesQuery>;
export type GetBodyInfoDataHistoriesLazyQueryHookResult = ReturnType<typeof useGetBodyInfoDataHistoriesLazyQuery>;
export type GetBodyInfoDataHistoriesQueryResult = Apollo.QueryResult<GetBodyInfoDataHistoriesQuery, GetBodyInfoDataHistoriesQueryVariables>;
export const GetHomePagePropsDocument = gql`
    query GetHomePageProps {
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
 * __useGetHomePagePropsQuery__
 *
 * To run a query within a React component, call `useGetHomePagePropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePagePropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePagePropsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomePagePropsQuery(baseOptions?: Apollo.QueryHookOptions<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>(GetHomePagePropsDocument, options);
      }
export function useGetHomePagePropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>(GetHomePagePropsDocument, options);
        }
export type GetHomePagePropsQueryHookResult = ReturnType<typeof useGetHomePagePropsQuery>;
export type GetHomePagePropsLazyQueryHookResult = ReturnType<typeof useGetHomePagePropsLazyQuery>;
export type GetHomePagePropsQueryResult = Apollo.QueryResult<GetHomePagePropsQuery, GetHomePagePropsQueryVariables>;
export const GetRecordPagePropsDocument = gql`
    query GetRecordPageProps {
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
 * __useGetRecordPagePropsQuery__
 *
 * To run a query within a React component, call `useGetRecordPagePropsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecordPagePropsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecordPagePropsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecordPagePropsQuery(baseOptions?: Apollo.QueryHookOptions<GetRecordPagePropsQuery, GetRecordPagePropsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecordPagePropsQuery, GetRecordPagePropsQueryVariables>(GetRecordPagePropsDocument, options);
      }
export function useGetRecordPagePropsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecordPagePropsQuery, GetRecordPagePropsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecordPagePropsQuery, GetRecordPagePropsQueryVariables>(GetRecordPagePropsDocument, options);
        }
export type GetRecordPagePropsQueryHookResult = ReturnType<typeof useGetRecordPagePropsQuery>;
export type GetRecordPagePropsLazyQueryHookResult = ReturnType<typeof useGetRecordPagePropsLazyQuery>;
export type GetRecordPagePropsQueryResult = Apollo.QueryResult<GetRecordPagePropsQuery, GetRecordPagePropsQueryVariables>;