import { Grid, TextField , Button ,ButtonGroup} from "@mui/material";
// import { ValueShow } from "../component/ValueShow";
import { useState } from "react";
import '../pages/Calculator.css'

export const Calculator = () =>{
   
 

           
        const [display , setDisplay] = useState('0')
        const [input , setInput] = useState("")

     /**
      * The handleInput function updates the display and input values based on the provided value.
      * @param value - The value parameter is the input value that is passed to the handleInput
      * function.
      */
        const handleInput = (value) =>{
               if(display === 0){
                setDisplay(value)
                setInput(value)
               }else{
                setDisplay(display + value)
                setInput(input + value)
               }
        }

       /**
        * The function "handleCalculate" evaluates the input and updates the input and display values
        * accordingly.
        */
        const handleCalculate = () =>{
          try{
             setInput(eval(input))
             setDisplay(eval(input))
          }catch(e){
            setInput(e)
          }
        }

    /**
     * The handleClear function clears the input and display values.
     */
        const handleClear = () =>{
            setInput('')
            setDisplay('')
        }
      
     /* The `row1` constant is an array that contains JSX elements representing buttons. Each button
     has specific styles and an `onClick` event handler. */
        const row1 = [
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleClear()}} >C</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('')}}>+/-</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('%')}}>%</Button>,
            <Button sx={{width:'100px' , height:'65px'}} variant="contained" onClick={()=>{handleInput('/')}}>/</Button>,
          ];
        const row2 = [
            <Button sx={{width:'100px' , height:'65px'}}    onClick={()=>{handleInput('7')}}>7</Button>,
            <Button sx={{width:'100px' , height:'65px'}}  onClick={(e)=>{handleInput('8')}}>8</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('9')}}>9</Button>,
            <Button sx={{width:'100px' , height:'65px'}} variant="contained" onClick={()=>{handleInput('*')}}>X</Button>,
          ];
        const row3 = [
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('4')}}>4</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('5')}}>5</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('6')}}>6</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('-')}} variant="contained">-</Button>,
          ];

          const row4 = [
            <Button sx={{width:'100px' , height:'65px'}}  onClick={()=>{handleInput('1')}}>1</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('2')}}>2</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('3')}}>3</Button>,
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('+')}} variant="contained">+</Button>,
          ];
          const row5 = [
            <Button sx={{width:'200px' , height:'65px'}}  onClick={()=>{handleInput('0')}}>0</Button>,
           
            <Button sx={{width:'100px' , height:'65px'}} onClick={()=>{handleInput('.')}}>.</Button>,
            /* `()=>{handleInput('')}` is an arrow function that is called when the corresponding
            button is clicked. It invokes the `handleInput` function with an empty string as an
            argument. The purpose of this function is to handle the input of the calculator. */
            <Button color="secondary" sx={{width:'100px' , height:'65px'}} onClick={()=>{handleCalculate('=')}} variant="contained">=</Button>,
          ];

        return(<>
     
          <Grid container spacing={1} className="container">
              <Grid item xs={12}>
                       <h1 className="heading">Calculator</h1>
              </Grid>
             
             
             
              <Grid container >
              <Grid item xs={12}>
              <TextField value={display}  sx={{width:395 , color:'black'}} disabled />
              </Grid>
              <Grid item xs={12} >
              <ButtonGroup size="large" aria-label="large button group">
                {row1}
            </ButtonGroup>
              </Grid>
              <Grid item xs={12}>
              <ButtonGroup size="large" aria-label="large button group">
                {row2}
            </ButtonGroup>
              </Grid>
              <Grid item xs={12}>
              <ButtonGroup size="large" aria-label="large button group">
                {row3}
            </ButtonGroup>
              </Grid>
              <Grid item xs={12}>
              <ButtonGroup  size="large" aria-label="large button group">
                {row4}
            </ButtonGroup>
              </Grid>
              <Grid item xs={12}>
              <ButtonGroup  size="large" aria-label="large button group">
                {row5}
            </ButtonGroup>
              </Grid>
             
              
             
            
          </Grid>
             
            
          </Grid>
         

        
        </>)
}