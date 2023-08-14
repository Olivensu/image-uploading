import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <div>
        <div className='max-w-md m-auto shadow-2xl my-10 py-10 border-2 border-l-yellow border-r-blue border-t-pink border-b-orange rounded-3xl'>
        <p className='text-2xl font-bold mb-5'>Register</p>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          id="standard-search"
          label="email"
          type="text"
          variant="standard"
          // style={{ display: 'block', margin: '0 auto', width: '80%' }}
        />
        </div>
        <div>
        <TextField
          id="standard-search"
          label="password"
          type="text"
          variant="standard"
        />
        </div>
        <div>
          <button className='btn btn-warning w-4/5 mt-5'>Submit</button>
        </div>
    </Box>
        </div>
    </div>
    
  )
}

export default Register