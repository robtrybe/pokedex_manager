create DATABASE IF NOT EXISTS pokedex;

use pokedex;

create table IF NOT EXISTS cards (
    id int unsigned not null auto_increment,
    name varchar(100) not null,
    primary key(id)
) Engine=InnoDB;

insert into cards values(1,'ditto'),(2,'Bulbasur');

create table IF NOT EXISTS decks(
    id int unsigned not null auto_increment,
    created_at datetime not null,
    primary key(id)
) Engine=InnoDB;

insert into decks values(1,'2023-01-10');

create table IF NOT EXISTS  deck_cards(
    deck_id int unsigned not null,
    card_id int unsigned not null,
    quantity int unsigned not null,
    foreign Key (deck_id) REFERENCES decks(id),
    foreign Key (card_id) REFERENCES cards(id)
) Engine=InnoDB;

insert into deck_cards values(1,1,5),(1,2,6),(1,2,4),(1,2,2);
