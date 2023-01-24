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

create table IF NOT EXISTS  deck_cards(
    deck_id int unsigned not null,
    card_id int unsigned not null,
    quantity int unsigned not null,
    foreign Key (deck_id) REFERENCES decks(id),
    foreign Key (card_id) REFERENCES cards(id),
    primary key(deck_id, card_id)
) Engine=InnoDB;
