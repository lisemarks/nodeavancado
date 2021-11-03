import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom'

import { deleteMovie, getMovies } from "../services/api";
import { IconButton, Button, Dialog} from '@mui/material';
import { Delete } from "@mui/icons-material";
import CreateIcon from '@mui/icons-material/Create';
const RenderDeleteButton = (props) => {
  const { id, row } = props;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleRemove() {
    console.log(row)
    deleteMovie(id).then(() => {
      row.setRows((movie) => movie.filter((row) => row.id !== id));
      setIsDialogOpen(false);
    });
  }

  function handleDialog(e) {
    e.stopPropagation();
    setIsDialogOpen(true);
  }

  function fecharDialog(e) {
    e.stopPropagation();
    setIsDialogOpen(false);
  }
  return (
    <>
      <Dialog open={isDialogOpen}>
        <Box padding={4} display="flex" flexDirection="column" alignItems="center">
          <p>
            Deseja Excluir o Filme?
          </p>
          <div>
            <Button variant="contained" onClick={handleRemove}>
              Sim
            </Button>
            <Button variant="contained" onClick={fecharDialog}>
              Não
            </Button>
            </div>
        </Box>
      </Dialog>
      <IconButton onClick={handleDialog}>
        <Delete />
      </IconButton>
      <IconButton component={ Link } to={`/update/${id}`}>
      <CreateIcon />
      </IconButton>
    </>
  );
};


const columns = [
  {field: "actions", headerName: 'Ações', width: 150,  renderCell: RenderDeleteButton},
  { field: "title", headerName: 'Titulo do Filme', width: 300 },
  { field: "director", headerName: 'Diretor', width: 150 },
  { field: "writers", headerName: 'Reteristas', width: 150 },
  { field: "releaseDate", headerName: 'Data de Lançamento', width: 150 },
  { field: "timeDuration", headerName: 'Duração', width: 150, },
];

function ListMoviePage () {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    document.title = "Listar"
    getMoviesFromApi();
  }, []);

  async function getMoviesFromApi() {
    const response = await getMovies();
    const data = response.data.map((movie) => {
      movie.id = movie.movieId;
      movie.setRows = setRows;
      return movie;
    })
    setRows(data);
  }

  return (
    <Container component="main">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Filmes
        </Typography>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid columns={columns} rows={rows} checkboxSelection>
          </DataGrid>
          
        </div>
      </Box>
    </Container>
  );
}

export default ListMoviePage;