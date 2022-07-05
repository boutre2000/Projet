const XLSX = require('xlsx')
const presence = require('../models/presence');
const User = require('../models/user');
const moment = require('moment');
const { object } = require('joi');
const { fabClasses } = require('@mui/material');


exports.setPres = async( req, res, next) =>{
  const file=req.file;
  const workbook = XLSX.readFile(file.path);
  const worksheet = workbook.SheetNames;
  const xlDatao = XLSX.utils.sheet_to_json(workbook.Sheets[worksheet[0]])
  const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[worksheet[0]],{header:0, defval: ""})
 // tab= new Array(); 
 
  let i=0;
  
    
    var arr= new Array();
    var tab= new Array();
    
    
    
    let j=0;
   

  const keys=[{key: 'idP', show: true}, {key:'nom', show: false}, {key: 'dep', show: false},{key: 'date', show: true},{key: 'ens', show: true}
    ,{key: 'enss', show: true},{key: 'enr', show: false},{key: 'enrr', show: false},{key: 'retard', show: true},
    {key:'avance', show: true},{key: 'abs', show: false},{key: 'total', show: false},{key: 'not', show: false}
    ]
 

  const users= await User.find()
  if (!users) {
    return res
    .status(409)
    .json('Cette section est vide');
    }

  xlData.forEach((row) => {

     let obj= {};
     Object.values(row).forEach((col, i) => {

      if(keys[i].show===true)
      obj={[keys[i].key]:col, ...obj}
       
     })
  tab.push(obj) })

     tab.sort((a,b)=>{
      return(new Date(b.date)- new Date(a.date))
     })
     
    j=2;
    i=2;
    let d= tab[2].date ;


     while(j<tab.length-3){
      var obj={};
      obj.date= new Date(tab[j].date);
      obj.presence=[];
      obj.absence=[];
      var t=[];
      tab[i].date=new Date(tab[i].date);
      var pids=[];
      

      while(((tab[i].date).getTime() === (obj.date).getTime())&& i<tab.length-3) {
        
        let o= {};
       


    if(tab[i].ens && tab[i].enss){
      tab[i].ens=(d.concat('T',tab[i].ens ,':00'));
      tab[i].enss=(d.concat('T',tab[i].enss ,':00'));
  
      tab[i].ens = new Date(tab[i].ens);
      tab[i].enss = new Date(tab[i].enss);
     
      o.enrepos= new Date(Math.max((tab[i].ens).getTime(),(tab[i].enss).getTime()))
      o.enservice= new Date( Math.min((tab[i].ens).getTime(),(tab[i].enss).getTime()))
  
     
  
      o.enrepos.setHours((o.enrepos.getHours()) + 2 )
      o.enservice.setHours((o.enservice.getHours()) + 2 )

    }else{
      if(!tab[i].ens){
        tab[i].enss=(d.concat('T',tab[i].enss ,':00'));
        o.enrepos = new Date(tab[i].enss);
         o.enrepos.setHours((o.enrepos.getHours()) + 2 )
      }
      if(!tab[i].enss){
        tab[i].ens=(d.concat('T',tab[i].ens ,':00'));
        o.enservice = new Date(tab[i].ens);
         o.enservice.setHours((o.enservice.getHours()) + 2 )
      }
    }

    
   
    o.retard= tab[i].retard;
    o.avance= tab[i].avance;
    o.idP=tab[i].idP;
    o.date=tab[i].date;
    

  const user= await User.findOne({idp: tab[i].idP})
  if (!user) {
    return res
    .status(409)
    .json('Cette section est vide');
    }
    o.userId=user._id;

     pids.push(tab[i].idP);
     obj.presence.push(o);
    

        i++; 
        d=tab[i].date;
        tab[i].date=new Date(tab[i].date);  
       
      }
   
      

//*****************Absences******************** */
     
  let abusers= await  User.find( {idp : { $nin: pids } })
       
        
        abusers.forEach((abuser) => {
          
          let os={};
          os.userId=abuser._id; 
         
          (obj.absence).push(os); 
           
         })
        // abusers.map(abuser=>{
        //   let os={};
        //   os.userId=abuser._id; 
         
          
        //   (obj.absence).push(os); 
      
        
       
     
      
      arr.push(obj);

      j=i;
     
     }
     presence.insertMany(arr)
     .then(() => res.status(201).json('presence creee!'))
     .catch(error => res.status(400).json({ error }))
    console.log(arr);

    //  console.log(JSON.stringify(arr));

    

}


    // }
    
  // })
  


exports.updatePres=(req, res,next) => {
  
  presence.findOneAndUpdate({_id: req.params.id},{...req.body} ,(err ) =>{
    if(err){
         res.status(400).json({error: 'modification ne peut etre sauvegarder'})
    }else{
       res.status(200).json('modification sauvegardee' )  }  });
      }





exports.getPres =async (req, res,next) => {
  presence.find({...req.body}).populate([{path: 'presence.userId',select: 'Nom Prenom'},{path: 'absence.userId',select: 'Nom Prenom'}])
  .then((dem)=>{ 
    if (!dem) 
      return res.status(401).json( 'cette section est vide !' ); 
     
       res.status(200).json(dem); 
    })
    .catch(error => res.status(500).json({ error }));  
         
         }

 

exports.checkoneAss =  (req, res,next) => {
  presence.findById(req.params.id).populate([{path: 'presence.userId',select: 'Nom Prenom'},{path: 'absence.userId',select: 'Nom Prenom'}])
  .then((d)=>{
      res.status(200).json(d);   
})
.catch(error => res.status(500).json({ error })); 
}

exports.checkonePres =  (req, res,next) => {
  presence.aggregate([{$match:{"_id":req.params.id}},{$unwind: "$presence"}, {$match:{"presence._id" : req.params.id}}] ).populate({path: 'presence.userId',select: 'Nom Prenom'})
  .then((d)=>{
      res.status(200).json(d);   
})
.catch(error => res.status(500).json({ error })); 
}
 
 
exports.checkPresUser =  (req, res,next) => {
  presence.findById({$or: [{$and:[{"absence.userId" : req.user},{...req.body}]},{$and:[{"presence.userId" : req.user},{...req.body}]}]})
  .then((d)=>{
      res.status(200).json(d);   
})
.catch(error => res.status(500).json({ error })); 
}
  
  


    












// exports.savePres =  async (req, res, next) => {
//   const file=req.file;
//   const workbook = XLSX.readFile(file.path);
//   const worksheet = workbook.SheetNames;
//   const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[worksheet[0]],{header:1, defval: ""})
//    tab= new Array(); 
//     //for( let i=0; i<worksheet.length; i++){
//   for( let i=2; i<xlData.length; i++){  
//     //  console.log(xlData);
//      //t=xlData.map(obj=>{Object.values(obj)});
  
     
//     let j=4; 
//     let mn=new Date(xlData[i][3].concat('T',xlData[i][j],':00'));
//     let mx=new Date(xlData[i][3].concat('T',xlData[i][j],':00'));
    
//     while(((xlData[1][j]==='En service')||(xlData[1][j]==='En repos'))&&(xlData[i][j])&&(j<xlData[i].length)){
//       let  d= new Date(xlData[i][3].concat('T',xlData[i][j],':00'));
//       mx=Math.max(d.getTime(),mx);
//       mn=Math.min(d.getTime(),mn);
//       j++; }
//         let user = await User.findOne({Nom : xlData[i][1]})
        
//       if(!user)
//         return res.status(400).json({error});
      
//       tab[i-2]={
//        enService: new Date(mn),
//        enRepos:new Date(mx),
//        userId: user._id,
//        etat: "Present"
//        }
//       }
//        presence.insertMany(tab)
//        .then(() => res.status(201).json({ message: 'presence creee!' }))
//        .catch(error => res.status(400).json({ error }))
       
//     }










//anomalies







// exports.checkAnomaliePres = async (req, res,next) => {

//   //let p= await presence.aggregate([{$project:{ enService:{$gt: [{$hour: "$enService"}, '09:01:00']}}}])
//   let i=0;
//   let t= new Array();
//   let tab= await presence.find()
//     if (!tab) 
//     { return res.status(401).json({ error: 'Cette section est vide !' })}
//     //tab.map(async p=>{
//     for(let j=0; j<tab.length; j++){
//     let hs=new Date(tab[j].enService);
//     ms=hs.getMinutes();
//     hs=hs.getHours();
//     let hr=new Date(tab[j].enRepos);
//     rs=hr.getMinutes();
//     hr=hr.getHours();
     
//      if(((hs>9)||(hs==9 && ms>01 ))||((hr<17)||(hr==17 && rs<30 ))) {
//      let user= await User.findById(tab[j].userId)
//      if(!user)
//      { return res.status(401).json({ error: 'Cette section est vide !' })}
//      else{
//      t[i]={
//        Nom: user.Nom,
//        Prenom: user.Prenom,
//        En_service: tab[j].enService,
//        En_repos: tab[j].enRepos
//      }
//      i++;
//      }
//      } 
//     }
//      res.status(200).json(t)
  
// }