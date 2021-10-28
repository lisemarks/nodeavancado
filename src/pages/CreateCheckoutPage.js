import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'

import { createMovie } from '../services/api'

const checkout = {
    firstName: "",
    lastName:"",
    cpf:"",
    address:"",
    city:"",
    state:"",
    postalcode:"",
    cardName:"",
    cardNumber:"",
    cardExpirationDate:"",
    cardCVV:""
}

function CreateCheckoutPage() {

  const [ fields, setFields ] = useState(checkout);

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(fields);
    const response = await createMovie(fields);
    console.log(response.status);
    if (response.status === 200) {
      setFields(checkout);
    }
  }

  return(
    <Box component="form" onSubmit={ handleSubmit } sx={{ mt: 5 }}>
      <Typography variant="h4">
      Checkout
      </Typography>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item sm={12}>
          <TextField 
            label="Nome" 
            variant="outlined" 
            name="firstName"
            fullWidth 
            onChange={ handleChange } 
            value={fields.firstName} 
          />
        </Grid>
        <Grid item sm={6}>
          <TextField label="Sobrenome" variant="outlined" name="lastName" fullWidth onChange={ handleChange } value={fields.lastName} />
        </Grid>
        <Grid item sm={6}>
          <TextField label="CPF" variant="outlined" name="cpf" fullWidth onChange={ handleChange } value={fields.cpf} />
        </Grid>
        <Grid item sm={6}>
          <TextField label="Endereço" variant="outlined" name="address" fullWidth onChange={ handleChange } value={fields.address} />
        </Grid>
        
        
        <Grid item sm={6}>
          <TextField label="Cidade" variant="outlined" name="city" fullWidth onChange={ handleChange } value={fields.city} />
        </Grid>
    
    <Grid item sm={6}>
          <TextField label="Estado" variant="outlined" name="state" fullWidth onChange={ handleChange } value={fields.state} />
        </Grid>
    
    <Grid item sm={6}>
          <TextField label="CEP" variant="outlined" name="postalcode" fullWidth onChange={ handleChange } value={fields.postalcode} />
        </Grid>

    
    <Grid item sm={6}>
          <TextField label="Nome no cartão" variant="outlined" name="cardName" fullWidth onChange={ handleChange } value={fields.cardName} />
        </Grid>
    
    <Grid item sm={6}>
          <TextField label="Número do cartão" variant="outlined" name="cardNumber" fullWidth onChange={ handleChange } value={fields.cardNumber} />
        </Grid>
    
    <Grid item sm={6}>
          <TextField label="Expiração" variant="outlined" name="cardExpirationDate" fullWidth onChange={ handleChange } value={fields.cardExpirationDate} />
        </Grid>
    
    <Grid item sm={6}>
          <TextField label="Código de segurança" variant="outlined" name="cardCVV" fullWidth onChange={ handleChange } value={fields.cardCVV} />
        </Grid>
        



        <Grid item sm={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large" 
          >
            Cadastrar checkout
          </Button> 
        </Grid>
      </Grid>   
    </Box>


    


  );
}

export default CreateCheckoutPage;