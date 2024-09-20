import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

        const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
      <button onClick={() => {
        navigate("/a")
      }} style={{ 
        backgroundColor: '#555', 
        color: '#fff', 
        padding: '10px 20px', 
        margin: '0 10px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' 
      }}>
        CompA
      </button>
      <button onClick={() => {
        navigate("/b")
      }} style={{ 
        backgroundColor: '#555', 
        color: '#fff', 
        padding: '10px 20px', 
        margin: '0 10px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' 
      }}>
        CompB
      </button>
      <button onClick={() => {
        navigate("/c")
      }} style={{ 
        backgroundColor: '#555', 
        color: '#fff', 
        padding: '10px 20px', 
        margin: '0 10px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' 
      }}>
        CompC
      </button>
      <button onClick={() => {
        navigate("/d")
      }} style={{ 
        backgroundColor: '#555', 
        color: '#fff', 
        padding: '10px 20px', 
        margin: '0 10px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' 
      }}>
        CompD
      </button>
    </div>
  );
}

export default Navbar;
