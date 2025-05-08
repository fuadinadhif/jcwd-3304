# NOTES

## Table Relationships

### One to One

1. Buat table `articles` dan `images`.
   1.1. Asumsi table articles belum ada

   ```sql
   CREATE TABLE articles (
     id UUID PRIMARY KEY DEFAULT uuid(),
     title VARCHAR(50) NOT NULL UNIQUE,
     content TEXT NOT NULL UNIQUE,
     created_at TIMESTAMP DEFAULT NOW(),
     image_id UUID UNIQUE
     CONSTRAINT fk_image
       FOREIGN KEY (image_id)
       REFERENCES images(id)
   );

   CREATE TABLE images (
     id UUID PRIMARY KEY DEFAULT uuid(),
     url TEXT NOT NULL UNIQUE
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

   1.2. Asumsi table articles sudah ada

   ```sql
    ALTER TABLE articles
    ADD COLUMN image_id UUID UNIQUE;

    ALTER TABLE articles
    ADD CONSTRAINT fk_image
    FOREIGN KEY (image_id) REFERENCES images(id);

    CREATE TABLE images (
      id UUID PRIMARY KEY DEFAULT uuid(),
      url TEXT NOT NULL UNIQUE
      created_at TIMESTAMP DEFAULT NOW()
    );

    <!-- Kalau lupa membuat image_id menjadi unique -->
    ALTER TABLE articles
    ADD CONSTRAINT unique_image_id
    UNIQUE (image_id);
   ```

### One to Many

1. Buat table reviews dan buat foreign key article_id di dalamnya

   ```sql
   CREATE TABLE reviews (
     id UUID PRIMARY KEY DEFAULT uuid(),
     review TEXT,
     rating FLOAT NOT NULL,
     created_at TIMESTAMP DEFAULT NOW(),
     article_id UUID,
     CONSTRAINT fk_article
       FOREIGN KEY (article_id)
       REFERENCES articles(id)
       ON DELETE CASCADE
   );
   ```

### Many to Many

1. Buat table categories

   ```sql
   CREATE TABLE categories (
     id UUID PRIMARY KEY DEFAULT uuid(),
     name VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

2. Buat junction table/table penguhubung dan foreign key yang dibutuhkan

   ```sql
    CREATE TABLE articles_categories (
      id UUID PRIMARY KEY DEFAULT uuid()
      article_id UUID NOT NULL,
      category_id UUID NOT NULL,
      CONSTRAINT fk_article
        FOREIGN KEY (article_id)
        REFERENCES articles(id)
        ON DELETE SET NULL,
      CONSTRAINT fk_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE SET NULL
    );
   ```

## Subquery

```sql
SELECT name
FROM authors
WHERE point > (
  SELECT AVG(point)
  FROM authors
);
```

## TRANSACTION

```sql
-- start transaction
BEGIN;

-- first query (remove 50 points)
UPDATE authors
SET point = point - 50
WHERE id = '1a6bb14a-4b90-4cc0-b933-3968aed34053';

-- second query (add 50 points)
UPDATE authors
SET point = point + 50
WHERE id = '4f3025d7-e38e-4bdb-b48e-ba6b6dcf9caa';

-- end succeed transaction
COMMIT;

-- end failed transaction
ROLLBACK;


```

## Others

### JOIN 3 Tables and Using ARRAY_AGG()

```sql
SELECT
  articles.title as article_title,
  images.url as article_image,
  ARRAY_AGG(categories.name) as article_categories
FROM articles
LEFT JOIN images ON articles.image_id = images.id
LEFT JOIN articles_categories ON articles.id = articles_categories.article_id
LEFT JOIN categories ON articles_categories.category_id = categories.id
GROUP BY articles.title, images.url;
```

### Regular VS Composite Unique Constraint

1. Regular Unique Constraint

```sql
ALTER TABLE articles_categories
ADD CONSTRAINT unique_article_id
UNIQUE article_id;
```

2. Composite Unique Constraint

```sql
ALTER TABLE articles_categories
ADD COSTRAINT unique_article_category
UNIQUE (article_id, category_id);
```
