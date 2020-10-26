for (let i = 0; i < 1000000; i++){
db.users.insertOne(
{
    "esu": i,
    "log": "loginName",
    "pass": "passwordHash",
    "rol": [
        "ADMIN"
    ],
    "lN": "lastName",
    "fN": "firstName",
    "mN": "middleName",
    "phn": "+79778777777",
    "mail": "admin@mail.ru",
    "us": "active",
    "eAE": [
        "externalAuthEntities1",
        "externalAuthEntities2",
        "externalAuthEntities3"
    ],
    "aNonE": true,
    "cNonE": true,
    "cr": "2020-10-26 17:20",
    "crBy": "root",
    "mdf": "2020-10-26 17:20",
    "mdfBy": "root"
	}
)
}