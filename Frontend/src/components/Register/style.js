import styled from 'styled-components'

export const Wrapper = styled.section`
  .details {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    align-items: center;
    margin: 40px auto;
    padding: 30px;
    border: 2px solid #e0e0e0;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: #fafafa;
  }

  input {
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
    height: 40px;
    text-align: center;
    margin-top: 20px;
    border: 2px solid #ccc;
    transition: border-color 0.3s, box-shadow 0.3s;
    font-size: 1rem;
    padding: 0 10px;
  }

  input:focus {
    outline: none;
    border-color: #535658ff;
    box-shadow: 0 0 6px rgba(123, 127, 131, 0.4);
    background-color: #fff;
  }
`
