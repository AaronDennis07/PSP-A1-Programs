import React ,{useState}from 'react'
import {Typography,TextField, Button} from '@mui/material'
export default function DiscountCalculator(props){

    const [form,setForm] = useState({
        number:'',
        showBanner: false,
        text:''
    })
   
    const handleChange = (evt)=>{
        setForm({
            ...form,
            [evt.target.name]: evt.target.value 
        })
        
    }
   const handleOnClick = (evt)=>{
        const number = form.number
       let text = ''
        if(number % 3 === 0 ){
           text = 'Zip'
        }
        else if(number % 5 === 0){
            text = 'Zap'
        }
        else{
            text = 'Zoom'
        }
        setForm({
            ...form,
            showBanner: true,
            text
        })
   }
    return(
        <div style={{width:'100%',height:'100%',textAlign:'center'}}>
            <h1 style={{textAlign:'center'}} >Zip Zap Zoom</h1>
            
            <TextField
            name='number'
          id="outlined-password-input"
          label={form.number ==='' ? 'Enter a number' : 'Number'}
          type="number"
        
          value={form.number}
          onChange={handleChange}
          sx={{marginBottom:'0.7rem',alignSelf:"center"}}
                 />

         <br/>
    <Button onClick={handleOnClick} sx={{marginInline:'center',marginBottom:'2rem'}} variant='contained' disabled={form.height!=='' && form.weight!==''?false:true} >Compute</Button>
    
          <div hidden={!form.showBanner}>
          <Typography variant='h5'>{form.text}</Typography>
       
        
           </div>
        </div>
    );
}
