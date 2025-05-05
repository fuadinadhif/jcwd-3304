# Command List

1. `psql --version` - Check the version of PostgreSQL installed.
2. `sudo -u postgres psql` - Connect to PostgreSQL as the `postgres` user.

## SQL Commands

1. `CREATE TABLE table_name (column1 data_type, column2 data_type);` - Create a new table with specified columns and data types.

   ```sql
   CREATE TABLE products (
     id UUID PRIMARY KEY,
     name VARCHAR,
     price FLOAT,
     sku VARCHAR UNIQUE,
     description TEXT,
     expired_at TIMESTAMP,
     created_at TIMESTAMP DEFAULT now()
   );
   ```

2. `INSERT INTO table_name (column1, column2) VALUES (value1, value2);` - Insert a new record into a table.

   ```sql
   INSERT INTO products (name, price, sku, description, expired_at)
   VALUES (
     'Asuransi Jiwa',
     19.99,
     'SKU12345',
     'Description of Asuransi Jiwa',
     '2023-12-31 23:59:59'
   );
   ```

3. `SELECT * FROM table_name;` - Retrieve all records from a table.

   ```sql
   SELECT * FROM products;
   ```

4. `ALTER TABLE table_name ADD COLUMN column_name data_type;` - Add a new column to an existing table.

   ```sql
   ALTER TABLE users ADD COLUMN gender VARCHAR NULL;
   ALTER TABLE users ADD COLUMN point INT DEFAULT 0;
   ```

5. `ALTER TABLE table_name DROP COLUMN column_name;` - Remove a column from a table.

   ```sql
   ALTER TABLE users DROP COLUMN gender;
   ```

6. `ALTER TABLE table_name ALTER COLUMN column_name TYPE new_data_type;` - Change the data type of a column.

   ```sql
   ALTER TABLE users ALTER COLUMN point TYPE FLOAT;
   ALTER TABLE users RENAME COLUMN point TO score;
   ```

7. `UPDATE table_name SET column1 = value1 WHERE condition;` - Update existing records in a table.

   ```sql
   UPDATE products SET price = 29.99 WHERE sku = 'SKU12345';
   ```

8. `DELETE FROM table_name WHERE condition;` - Delete records from a table.

   ```sql
   DELETE FROM products WHERE sku = 'SKU12345';
   ```
