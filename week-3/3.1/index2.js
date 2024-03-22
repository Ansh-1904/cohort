
const express=require("express")
const zod=require("zod")
const app=express();

const schema=zod.array(zod.number())
//{
//  email: string
//  password: string
//  country: "IN" or "US"
//  kidneys: arr of numbers
//}
// const schema=zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country:zod.literal("IN").or(zod.literal("US")),
//     kidneys:zod.array(zod.number())
// })

app.use(express.json());

app.post("/health-checkup", function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys
    const response=schema.safeParse(kidneys)
    if(!response.success)
    {
        res.status(411).send({
            msg:"Wrong inputs"
        })
    }
    else{
        res.send({
            response
        })
    }
    
});

app.listen(3000);