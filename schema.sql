create table food(
id SERIAL PRIMARY KEY,
tod VARCHAR(5),
title VARCHAR(25),
description VARCHAR(255),
price VARCHAR(6)
);

create table users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20)
);