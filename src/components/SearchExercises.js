import React, {useState,useEffect} from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import {fetchData, exerciseOptions} from "../utils/fetchData"

const SearchExercises = () => {
const [search, setSearch] = useState("");

const handleSearch = async ()=>{
  const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
  if(search){
    const exerciseData = await fetchData(url, exerciseOptions);
    console.log(exerciseData);
  }
}

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography fontWeight={700}
      sx={{fontSize:{lg:"44px", xs:"30px"}}}
      mb="50px" textAlign="center"
      >
        Awesome Exercises <br /> 
        You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField type="text"
        sx={{input:{fontWeight:"700", border:"none", borderRadius:"5px"},
        width:{lg:"800px", xs:"350px"}
      }}
        height="76px" value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises..."
        />
        <Button className='search-btn'
        sx={{bgcolor:"#ff2625", color:"#fff", textTransform:"none", width:{lg:"175px", xs:"80px"}, fontSize:{lg:"20px", xs:"14px"}, height:"56px", position:"absolute", right:"0"}}
        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises