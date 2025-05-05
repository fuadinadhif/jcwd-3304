# NOTES

1. COUNT() - Count rows in a table
2. SUM() - Sum of a column
3. AVG() - Average of a column
4. MIN() - Minimum value of a column
5. MAX() - Maximum value of a column

6. WHERE - Filter rows based on a condition
7. GROUP BY - Group rows that have the same values in specified columns into summary rows
8. HAVING - Filter groups based on a condition
9. ORDER BY - Sort the result set in ascending or descending order
10. LIMIT - Specify the number of records to return
11. OFFSET - Specify the number of records to skip before starting to return records

## -

1. User & Event
2. User:
   - id
   - name
   - email
   - password
   - role
   - city
   - street
   - zip
   - country
   - phone
   - point
   - created_at
   - updated_at
   - deleted_at
3. Event:
   - id
   - name
   - description
   - start_time
   - end_time
   - location
   - max_participants
   - status
   - price
   - voucher_code
   - created_at
   - updated_at
   - deleted_at
4. Transaction:

   - id
   - user_id
   - event_id
   - amount
   - status
   - created_at
   - updated_at
   - deleted_at

Table:

1. User
2. Address
3. Event
4. Transaction
5. Voucher
6. Review
7. Category

Table User:

- id
- name
- email
- password
- role
- created_at

## Normalization

### 1NF

#### Before Normalization

Before normalization, the table may have repeating groups or arrays.

| employee_id | full_name      | email                   | age | department_name | department_floor | phone_numbers                                     | created_at          | updated_at          |
| ----------- | -------------- | ----------------------- | --- | --------------- | ---------------- | ------------------------------------------------- | ------------------- | ------------------- |
| EMP001      | Alice Johnson  | alice.johnson@acme.com  | 29  | Marketing       | 3                | +1-555-123-4567                                   | 2023-02-14 10:15:00 | 2024-04-11 09:00:00 |
| EMP002      | Brian Smith    | brian.smith@acme.com    | 34  | Engineering     | 5                | +1-555-234-5678, +1-555-234-8888                  | 2022-11-20 08:45:00 | 2024-03-21 14:33:00 |
| EMP003      | Carla Nguyen   | carla.nguyen@acme.com   | 41  | Human Resources | 2                | +1-555-345-6789, +1-555-345-0000, +1-555-345-1111 | 2021-06-30 12:10:00 | 2023-11-19 16:20:00 |
| EMP004      | Daniel Lee     | daniel.lee@acme.com     | 27  | Product Design  | 4                | +1-555-456-7890                                   | 2024-01-04 09:00:00 | 2024-12-01 08:30:00 |
| EMP005      | Eva Martínez   | eva.martinez@acme.com   | 36  | Finance         | 6                | +1-555-567-8901, +1-555-567-2222                  | 2022-03-15 11:25:00 | 2023-10-25 10:10:00 |
| EMP006      | Felix Anders   | felix.anders@acme.com   | 30  | IT Support      | 1                | +1-555-678-9012, +1-555-678-9999, +1-555-678-1010 | 2023-07-01 14:00:00 | 2024-05-03 13:15:00 |
| EMP007      | Grace Kim      | grace.kim@acme.com      | 33  | Legal           | 7                | +1-555-789-0123                                   | 2020-12-12 16:40:00 | 2023-09-14 09:50:00 |
| EMP008      | Henry O’Neill  | henry.oneill@acme.com   | 45  | Sales           | 3                | +1-555-890-1234, +1-555-890-2222                  | 2019-10-21 07:35:00 | 2023-06-18 12:45:00 |
| EMP009      | Isabella Rossi | isabella.rossi@acme.com | 26  | Marketing       | 3                | +1-555-901-2345, +1-555-901-3333                  | 2024-02-10 13:05:00 | 2024-04-20 15:55:00 |
| EMP010      | Jack Thompson  | jack.thompson@acme.com  | 39  | Engineering     | 5                | +1-555-012-3456, +1-555-012-6789, +1-555-012-0001 | 2021-08-08 10:20:00 | 2024-01-30          |

#### After Normalization

| employee_id | full_name     | email                  | age | department_name | department_floor | created_at          | updated_at          |
| ----------- | ------------- | ---------------------- | --- | --------------- | ---------------- | ------------------- | ------------------- |
| EMP001      | Alice Johnson | alice.johnson@acme.com | 29  | Marketing       | 3                | 2023-02-14 10:15:00 | 2024-04-11 09:00:00 |
| EMP002      | Brian Smith   | brian.smith@acme.com   | 34  | Engineering     | 5                | 2022-11-20 08:45:00 | 2024-03-21 14:33:00 |
| EMP003      | Carla Nguyen  | carla.nguyen@acme.com  | 41  | Human Resources | 2                | 2021-06-30 12:10:00 | 2023-11-19 16:20:00 |

| phone_id | employee_id | phone_number    |
| -------- | ----------- | --------------- |
| 1        | EMP001      | +1-555-123-4567 |
| 2        | EMP002      | +1-555-234-5678 |
| 3        | EMP002      | +1-555-234-8888 |
| 4        | EMP003      | +1-555-345-6789 |
| 5        | EMP003      | +1-555-345-0000 |
| 6        | EMP003      | +1-555-345-1111 |

```
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  street VARCHAR(255) NOT NULL,
  city VARCHAR(50) NOT NULL,
  province VARCHAR(50) NOT NULL,
  country VARCHAR(50) NOT NULL,
  postal_code INT
);

ALTER TABLE authors
ADD COLUMN address_id UUID;

ALTER TABLE authors
ADD CONSTRAINT fk_author_address
FOREIGN KEY (address_id) REFERENCES addresses(id);

INSERT INTO addresses (street, city, province, country, postal_code)
VALUES
('Jalan Sudirman', 'Jakarta', 'DKI Jakarta', 'Indonesia', 10220),
('Jalan Thamrin', 'Jakarta', 'DKI Jakarta', 'Indonesia', 10230),
('Jalan Gatot Subroto', 'Jakarta', 'DKI Jakarta', 'Indonesia', 10240),
('Jalan Kebon Sirih', 'Jakarta', 'DKI Jakarta', 'Indonesia', 10250),
('Jalan Rasuna Said', 'Jakarta', 'DKI Jakarta', 'Indonesia', 10260);
```

```
SELECT *
FROM authors
JOIN addresses ON address_id = addresses.id;

SELECT authors.name, addresses.street, addresses.city, addresses.postal_code
FROM authors
INNER JOIN addresses ON address_id = addresses.id;

SELECT authors.name, addresses.street, addresses.city, addresses.postal_code
FROM authors
LEFT JOIN addresses ON address_id = addresses.id;

SELECT authors.name, addresses.street, addresses.city, addresses.postal_code
FROM authors
RIGHT JOIN addresses ON address_id = addresses.id;

INSERT INTO addresses (street, city, province, country, postal_code)
VALUES
('Jalan Benhill', 'Jakarta', 'DKI Jakarta', 'Indonesia', 10220);
```
