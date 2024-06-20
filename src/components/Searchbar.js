import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const MY_APP_ID = process.env.REACT_APP_API_ID;
const MY_APP_KEY = process.env.REACT_APP_API_KEY;

const SearchBar = ({ setRecipes }) => {
  const [query, setQuery] = useState('');

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=${MY_APP_ID}&app_key=${MY_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleSearch = () => {
    fetchRecipes();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchRecipes();
    }
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        margin: '20px auto',
      }}
    >
      <TextField
        fullWidth
        label="Wyszukaj przepisy"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        id="fullWidth"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onKeyPress={handleKeyPress}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#f0f0f0', 
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;