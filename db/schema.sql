DROP TABLE IF EXISTS cocktails;
DROP TABLE IF EXISTS ingredients;



CREATE TABLE cocktails(
    id  SERIAL PRIMARY KEY NOT NULL,
    name  varchar(255) NOT NULL,
    ingredient_id INT ,
    glass varchar(255) NOT NULL,
    comments varchar(255)
);

CREATE TABLE  ingredients(
    id SERIAL PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
    measurement INT
);

