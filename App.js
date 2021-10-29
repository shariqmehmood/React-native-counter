
import React, { useState} from 'react';
import   {Text, View } from 'react-native';
import './src/component/switch.css';


export default function App() {
  const [color,setcolor]=useState("white");
  const [bgcolor,setbgcolor]=useState("black")
  const [counter,setcounter]=useState(1);

 


  const add=()=>{
    setcounter(counter+1)
  }
  const sub=()=>{
    setcounter(counter-1)
  }
  const ChangeTheme=()=>{
   if(color=="white"){
     setcolor("black")
   }
   else(
     setcolor("white")
   )

   if(bgcolor=="grey"){
    setbgcolor("black")
  }
  else(
    setbgcolor("grey")
  )


  }
  return (
    <View style={{ width:1022, height: 590,backgroundColor:bgcolor }}>
    
<View className="navbar">
  <ul>
    <li style={{color:color,display:"inline-block",marginLeft:"30%"}}><h1>React Native</h1></li>
    <li style={{color:color,display:"inline-block",marginLeft:"10%",paddingTop:"-30px"}}>  <Text  style={{color:color}}>
      
       <label  className="swith">
            <input onChange={ChangeTheme} type="checkbox" />
            <span  className="slider"/>
            
        </label>

         </Text></li>
  </ul>
</View>
    <View style={{margin:100}}>
      
     <Text style={{fontSize:"20px",backgroundColor:bgcolor,paddingBottom:"20px",marginTop:"-100px",fontFamily:"bold",color:color,textAlign:"center"}}>
       <h1>
         Counter-App
       </h1>
     

     </Text>

   
     


     <Text style={{marginTop:30,fontSize:"20px",fontFamily:"bold",color:color,borderColor:bgcolor,textAlign:"center",backgroundColor:bgcolor}}>
       {counter}
     </Text>
       
       <View  style={{marginTop:20,borderColor:{bgcolor},display:"inline-block"}}>

     <Text onPress={add} style={{borderColor:bgcolor,color:color,backgroundColor:bgcolor,width:"50%",display:"inline-block",paddingLeft:"40%",fontSize:"25px"}} >+</Text>
     <Text onPress={sub} style={{borderColor:bgcolor,color:color,backgroundColor:bgcolor,width:"50%",display:"inline-block",paddingLeft:"7%",fontSize:"25px"}} >-</Text>
       </View>
     
     
    </View>
    </View>

  );
}





