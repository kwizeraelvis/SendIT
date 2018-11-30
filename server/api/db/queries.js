const dbQueries = {};

const createParcelTable = `create table users
(
    uid uuid,
    ufirstname varchar(50),
    ulastname varchar(50),
    uemail varchar(50),
    upassword varchar(50),
    primary key (uid)
)`;

const createUserTable = `create table parcels
(
    pid uuid,
    owner_id int,
    plocation varchar(50),
    pdestination varchar(50),
    pweight number(50),
    pstatus varchar(50),
    primary key (pid),
    foreign key(owner_id) references user(uid)
)`;
const createUserQuery = `insert into users
    (uid,ufirstname,ulastname,uemail,upassword)
    values($1, $2, $3, $4, $5) returning *`;
const userLoginQuery = 'select * from users where uemail=$1';

dbQueries.createParcelTable = createParcelTable;
dbQueries.createUserTable = createUserTable;
dbQueries.createUserQuery = createUserQuery;
dbQueries.userLoginQuery = userLoginQuery;
export default dbQueries;
