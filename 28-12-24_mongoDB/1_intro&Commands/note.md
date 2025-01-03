# MongoDB


## Structure of MongoDB
- in **database** -> ex -> parul
- we have multiple **collection** -> (ex -> student,staff,professors)
- inside we have multiple **document**(object)


- **To check mongodb version** 
  > **mongod --version**

## MongoDB Commands
1. **Connect with database**
   > ***mongosh*** 
  
2. **Show all the databases**
   > ***show dbs*** || ***show databases***
  
3. **Create database and use it**
   > ***use database_name***
   - Example-> **use parulUniv**
   - ***It will not show in show dbs because it doesnot contain any collection right now***
  
4. **Show All Selected Database Collections**
   >  ***show collections***
  
5. **Single Collection Create**
   > ***db.createCollection("CSE")***

5. **Delte Collection**
   > ***db.collectionName.drop()***
   - Example -> ***db.CSE.drop()***

6. **Delete the Database**
   > ***db.dropDatabase()***



