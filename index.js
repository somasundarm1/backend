const express=require('express');
const db = require('./db');
const cors=require('cors');
const app=express();
app.use(express.json());
const port = 8080;

app.use(cors());



app.post('/add-values',(req,res)=>{
    try{
        const {firstName,lastName,empId,email,phone,department,dateOfJoining,role}=req.body;

        

        db.query("SELECT * FROM empdetails WHERE email=? or empId=?",[email,empId],(err,result)=>{
            if(err){
                return res.status(500).json({message:"Internal server at duplication checking error"});
            }

          if(result.length>0){
            console.log(result);
            const duplicate=result[0].email==email?"email":"empId";
            return res.status(500).json({message:`${duplicate} already exists`});
          }

          //insert into table

          db.query("INSERT INTO empdetails(firstName,lastName,empId,email,phone,department,dateOfJoining,role) VALUES (?,?,?,?,?,?,?,?)",
            [firstName,
            lastName,
            empId,
            email,
            phone,
            department,
            dateOfJoining,
            role],(err)=>{
                if(err){
                    return res.status(500).json({ message: "Internal Server  Error at inserting values" });
                }
                res.status(201).json({ message: "Employee added successfully" });
            })

        
          

        })
        
    } 
    catch(err){
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }   
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("Connected to database");
    
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})




