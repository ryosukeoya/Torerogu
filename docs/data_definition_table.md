## users

|    Name    |           Type           | Nullable | Unique | Default | Description |
| :--------: | :----------------------: | :------: | :----: | :-----: | :---------: |
|     id     |           text           |    No    |  Yes   |  None   | primary key |
|    name    |           text           |    No    |   No   |  None   |             |
|   height   |         numeric          |   Yes    |   No   |  None   |             |
| created_at | timestamp with time zone |    No    |   No   |  now()  |             |
| updated_at | timestamp with time zone |    No    |   No   |  now()  |             |

## body_info_data_histories

|        Name         |           Type           | Nullable | Unique | Default |  Description   |
| :-----------------: | :----------------------: | :------: | :----: | :-----: | :------------: |
|         id          |         integer          |    No    |  Yes   |  None   |  primary key   |
|       user_id       |           text           |    No    |   No   |  None   |  foreign key   |
|       weight        |         numeric          |    No    |   No   |  None   |                |
| body_fat_percentage |         integer          |   Yes    |   No   |  None   |                |
|        date         | timestamp with time zone |    No    |   No   |  None   | specified date |
|      is_record      |         boolean          |    No    |   No   |  None   |  record flag   |
|     created_at      | timestamp with time zone |    No    |   No   |  now()  |                |
|     updated_at      | timestamp with time zone |    No    |   No   |  now()  |                |

## trainings

|       Name       |           Type           | Nullable | Unique | Default |  Description   |
| :--------------: | :----------------------: | :------: | :----: | :-----: | :------------: |
|        id        |         integer          |    No    |  Yes   |  None   |  primary key   |
|     user_id      |           text           |    No    |   No   |  None   |  foreign key   |
| training_type_id |         integer          |    No    |   No   |  None   |                |
| training_weight  |         integer          |   Yes    |   No   |  None   |                |
|  training_count  |         integer          |   Yes    |   No   |  None   |                |
|   training_set   |         integer          |   Yes    |   No   |  None   |                |
|    is_finish     |         boolean          |    No    |   No   |  None   |                |
|       date       | timestamp with time zone |    No    |   No   |  None   | specified date |
|    created_at    | timestamp with time zone |    No    |   No   |  now()  |                |
|    updated_at    | timestamp with time zone |    No    |   No   |  now()  |                |

## training_types

|         Name         |           Type           | Nullable | Unique | Default |                                          Description                                           |
| :------------------: | :----------------------: | :------: | :----: | :-----: | :--------------------------------------------------------------------------------------------: |
|          id          |         integer          |    No    |  Yes   |  None   |                                          primary key                                           |
| training_category_id |         integer          |    No    |   No   |  None   |                                          foreign key                                           |
|         name         |           text           |    No    |  Yes   |  None   |                                                                                                |
|      max_weight      |         numeric          |   Yes    |   No   |  None   |                                                                                                |
|      min_weight      |         numeric          |   Yes    |   No   |  None   |                                                                                                |
|     kind_number      |         integer          |    No    |   No   |  None   | [※ enum](https://github.com/ryosuke1256/Torerogu/blob/feature/doc/src/enums/training_types.ts) |
|      created_at      | timestamp with time zone |    No    |   No   |  now()  |                                                                                                |
|      updated_at      | timestamp with time zone |    No    |   No   |  now()  |                                                                                                |

## training_categories

|    Name    |           Type           | Nullable | Unique | Default | Description |
| :--------: | :----------------------: | :------: | :----: | :-----: | :---------: |
|     id     |         integer          |    No    |  Yes   |  None   | primary key |
|    name    |           text           |    No    |  Yes   |  None   |             |
| created_at | timestamp with time zone |    No    |   No   |  now()  |             |
| updated_at | timestamp with time zone |    No    |   No   |  now()  |             |
