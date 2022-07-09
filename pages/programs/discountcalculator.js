import React ,{useState}from 'react'
import {Typography,TextField, Button} from '@mui/material'
export default function DiscountCalculator(props){

    const [form,setForm] = useState({
        discount: 0,
        showBanner: false,
        totalSavings:0,
        amount:0,
        payable:0
    })
   
    const handleChange = (evt)=>{
        setForm({
            ...form,
            [evt.target.name]: evt.target.value 
        })
        
    }
   const handleOnClick = (evt)=>{
        const amount = form.amount
        const discount= 0
        
        if( amount <=5000 ){
            discount = 5
             console.log(amount => 0 )   
        }
        else if(amount > 5000 && amount <=15000){
            discount = 12
        }
        else if(amount > 15000 && amount <= 25000 ){
            discount = 20
        }
        else{
            discount = 30
        }
        const totalSavings = (amount * discount)/100
         const   payable = amount - totalSavings
        setForm({
            ...form,
            showBanner: true,
            totalSavings,
            discount,
            payable
        })
   }
    return(
        <div style={{width:'100%',height:'100%',textAlign:'center'}}>
            <h1 style={{textAlign:'center'}} >Discount Calculator</h1>
            
            <TextField
            name='amount'
          id="amount"
          label={form.amount ==='' ? 'Enter the Amount' : 'Amount'}
          type="number"
        
          value={form.amount === 0 ? '':form.amount}
          onChange={handleChange}
          sx={{marginBottom:'0.7rem',alignSelf:"center"}}
                 />

         <br/>
    <Button onClick={handleOnClick} sx={{marginInline:'center',marginBottom:'2rem'}} variant='contained' disabled={form.height!=='' && form.weight!==''?false:true} >Calculate</Button>
    
          <div hidden={!form.showBanner}>
          <Typography variant='h5'>     Discount:     {form.discount}%</Typography>
          <Typography variant='h5'>Total Savings:     {form.totalSavings}</Typography>
          <Typography variant='h5'>Total Payable:     {form.payable}</Typography>
        
           </div>
        </div>
    );
}
