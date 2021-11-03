## API Documentation
***Data model 'users' contains 3 fields:*** <br>
**id**:*unique field for each user, autoincremented, used as primary key, type: number.* <br>
**email**:*unique field for each user, cannot be zero, type: string.* <br>
**password**:*not unique field, cannot be zero, type: string.* <br>
***End-points*** <br>
**/users**:*GET request - getAll users (for viewing).* <br>
**/auth/login**:*POST request - login, returns a token on success, or a 403 status code if user doesn't exist in bd.* <br>
**/auth/registration**:*POST request - registration, returns a token on success, or a 400 status code if data is invalid* <br>
## Deployment
```
docker-compose up
``` 
**or use npm**
```
npm i
```
```
npm run start
```

## Stack
*Nest js* <br>
*PostgreSql* <br>
*ORM Sequelize*
