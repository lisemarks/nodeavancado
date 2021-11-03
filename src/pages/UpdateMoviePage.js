import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { useLocation } from 'react-router-dom';
import { getSingleMovies, updateMovie } from '../services/api'

const movie = {
  title: "",
  director: "", 
  writers: "", 
  releaseDate: "", 
  timeDuration: ""
}


export default function UpdateMoviePage() {
  const [ fields, setFields ] = useState(movie);
  const location = useLocation();
  const { id, slug } = useParams();

  function handleChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    setFields({ ...fields, [fieldName]: value });
  }

  useEffect(() => {
    document.title = "Filme"
    buscarFilme()
    // fields.writers = filme.data.writers
  }, []);
  
  async function buscarFilme(){
    const filme = await getSingleMovies(id);
    console.log(filme.data)
    setFields(filme.data)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(fields);
    const response = await updateMovie(id, fields);
     if (response.status === 200) {
       setFields(movie);
  }
  }

  return (
    <div>
      <Container component="main">
      <Box component="form" onSubmit={ handleSubmit } sx={{ mt: 5 }}>
        <Typography variant="h4">
          Atualizar Filme
        </Typography>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item sm={12}>
            <TextField 
              label="Titulo" 
              variant="outlined" 
              name="title"
              fullWidth 
              onChange={ handleChange } 
              value={fields.title} 
            />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Diretor" variant="outlined" name="director" fullWidth onChange={ handleChange } value={fields.director} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Roteiristas" variant="outlined" name="writers" fullWidth onChange={ handleChange } value={fields.writers} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Data lançamento" variant="outlined" name="releaseDate" fullWidth onChange={ handleChange } value={fields.releaseDate} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Tempo de duração" variant="outlined" name="timeDuration" fullWidth onChange={ handleChange } value={fields.timeDuration} />
          </Grid>
          <Grid item sm={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large" 
            >
              Atualizar Filme
            </Button> 
          </Grid>
        </Grid>     
      </Box>
    </Container>
    </div>
  );
}