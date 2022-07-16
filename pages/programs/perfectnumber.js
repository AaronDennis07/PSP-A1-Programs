import React ,{useState}from 'react'
import {Typography,TextField, Button} from '@mui/material'
import Head from 'next/head'

export default function PerfectNumber(props){

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

        let sum = 0 
        let color = ''
        let text = ''
        for(let i=1;i<number;i++){
            if(number%i === 0 ){
                sum += i
            }
        }
        console.log(sum)
        if(sum==number){
            console.log("hi")
            color='green'
            text = number + ' is a perfect number'
        }
        else{
            color='red'
            text = number + ' is not a perfect number'
        }
        setForm({
            ...form,
            showBanner: true,
            text,
            color
        })
   }
    return(
        <div style={{width:'100%',height:'100%',textAlign:'center'}}>
              <Head>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6813609620822362"
     crossorigin="anonymous"></script>
            </Head>

            <h1 style={{textAlign:'center'}} >Perfect Number</h1>
            
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
          <Typography variant='h5' color={form.color}> {form.text}</Typography>
       
        
           </div>
        </div>
    );
}
