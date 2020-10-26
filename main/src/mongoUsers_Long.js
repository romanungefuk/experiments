for (let i = 0; i < 1000000; i++){
db.users.insertOne(
{
    "enterpriseSystemUserId": i,
    "login": "loginName",
    "passwordHash": "passwordHash",
    "roles": [
        "ADMIN"
    ],
    "lastName": "lastName",
    "firstName": "firstName",
    "middleName": "middleName",
    "phone": "+79778777777",
    "email": "admin@mail.ru",
    "userStatus": "active",
    "externalAuthEntities": [
        "externalAuthEntities1",
        "externalAuthEntities2",
        "externalAuthEntities3"
    ],
    "accountNonExpired": true,
    "credentialsNonExpired": true,
    "created": "2020-10-26 17:20",
    "createdBy": "root",
    "modified": "2020-10-26 17:20",
    "modifiedBy": "root"
	}
)
}