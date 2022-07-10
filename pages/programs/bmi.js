import React, { useState } from 'react'
import {Typography,InputAdornment,TextField, Button} from '@mui/material'

export default function BMI(props){
    const [form,setForm] = useState({
        height: '',
        weight:'',
        bmi:'',
        showBanner: false,
        color:''
    })
   
    const handleChange = (evt)=>{
        setForm({
            ...form,
            [evt.target.name]: evt.target.value 
        })
        
    }
   const handleOnClick = (evt)=>{
        const bmi = (form.weight/(form.height*form.height)*10000).toFixed(2)
        const color=''
        const verdict = ''
        if(bmi > 18.4 && bmi <= 24.9 ){
            color='green'
            verdict = 'healthy'
        }
        else if(bmi <= 18.4 ){
            color = 'yellow'
            verdict = 'underweight'
        }
        else if(bmi <= 29.9 && bmi>=25 ){
            color = '#FF8A8A'
            verdict = 'overweight'
        }
        else{
            color = 'red'
            verdict='obese'
        }
        setForm({
            ...form,
            showBanner: true,
            bmi,
            color,
            verdict
        })
   }
    return(
        <div style={{width:'100%',height:'100%',textAlign:'center'}}>
            <h1 style={{textAlign:'center'}} >BMI Calculator</h1>
            
            <TextField
            name='weight'
          id="weight"
          label={form.weight ==='' ? 'Enter the Weight(in kg)' : 'Weight(in kg)'}
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          value={form.weight}
          onChange={handleChange}
          sx={{marginBottom:'0.7rem',alignSelf:"center"}}
                 />

    <br/>
<TextField
          id="outlined-password-input"
          label={form.height ==='' ? 'Enter the Height(in cm)' : 'Height(in cm)'}
          value={form.height}
          onChange={handleChange}
         name='height'
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="start">cm</InputAdornment>,
          }}
          sx={{marginBottom:'1rem'}}
        />
        <br/>
    <Button onClick={handleOnClick} sx={{marginInline:'center',marginBottom:'2rem'}} variant='contained' disabled={form.height!=='' && form.weight!==''?false:true} >Calculate</Button>
    
          <div hidden={!form.showBanner}>
          <Typography variant='h5'>BMI Score: <Typography variant='h5' component='span' color={form.color}> {form.bmi}</Typography></Typography>
          <Typography variant='h5'>Verdict:<Typography component='span' variant='h5' color={form.color}> You&apos;re {form.verdict}</Typography></Typography>
          </div>
        </div>
    );
}
