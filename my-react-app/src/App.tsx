//import { fontGrid } from '@mui/material/styles/cssUtils';
import React, { CSSProperties } from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: { 
    marginTop: '20px',
    padding: '20px',
    paddingBottom: '40px',
    paddingRight: '40px',
    background: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  input: {
    width: '100%',
    paddingBottom: '20px',
    padding: '10px ',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    borderBottom: '2px solid #3498db ',
    fontSize: '16px',

  },
  button: {
    background: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: any) => {
    const {name,value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
   const nav = useNavigate();
  

  const handleSubmit = (e: any) => {

    e.preventDefault();
    console.log(form);
    //const {name,value} = e.target;
    if(form.name == '' || form.email == '' || form.phone == ''){
      alert('Cannot Access 2nd page');
      nav('/');
    }
    else{
    nav('/page');
    }
  }

  return (
    <>
      <div style={styles.container}>
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <TextField 
            style={styles.input}
            label="Name"
            variant="outlined"
            name="name"
            value={form.name}
            onChange={handleChange}
            />
          <TextField
            style={styles.input}
            label="Email"
            variant="outlined"
            name="email"
            value={form.email}
            onChange={handleChange}
            />
          <TextField
            style={styles.input}
            label="Phone"
            variant="outlined"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            />
          <Button type="submit" variant="outlined">Submit</Button>
        </form>        
      </div>
    </>
  )
}

export default App
