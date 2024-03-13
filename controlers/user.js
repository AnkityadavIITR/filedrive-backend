

export async function addUser(req,res){
    console.log(req.body);
    try{
        const response=await User.create(req.body);
        res.status(201).json({
            success:true,
            message:"user created"
        })
    }catch(e){
        res.json({
            success:false,
            message:"error in saving user"
        })
    }
}