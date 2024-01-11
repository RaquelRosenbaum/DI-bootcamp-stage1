--one to one
create table users (
	user_id serial primary key,
	email varchar(255) unique not null,
	username varchar(255) not null
	)
	
create table users_password (
	upass_id serial primary key,
	email varchar (255) unique not null references users(email),
	user_password varchar(1000) not null
	)
insert into users (email,username)
values ('aaa@gmail.com','aaa'),
		('bbb@gmail.com','bbb'),
		('ccc@gmail.com','ccc')
select * from users

--one to many

create table articles (
	article_id serial primary key,
	title varchar(255) unique not null,
	body varchar(1000) not null,
	author varchar (255) not null references users(email)
)
 insert into articles (title, body, author)
 	values
		('sql gives me a headache', 'advanced js', 'aaa@gmail.com')
create table cart
etc.
select * from articles

select users.username, items.item_name from users
inner join cart
on users.user_id = cart.user_id
inner join items
on items.item_id = cart.item_id
group by users.username, items.item_name

which user bought which items

