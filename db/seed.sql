INSERT INTO ingredients(name, measurement)
VALUES
('Don Julio Tequila', 2),
('Don Julio Tequila', 1),
('El Buho Mezcal', 1);


INSERT INTO cocktails(name, ingredient_id ,method, glass, comments)
VALUES
('Margarita Clasica','{}' ,'Shake and strain', 'rocks', 'This is an easy cocktail to make!'),
('Mezcal Margarita','{}' ,'Shake and strain', 'rocks', 'test 1' ),
('water','{}' ,'build', 'wine glass', 'test 2' )
;