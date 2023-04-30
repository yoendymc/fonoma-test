import styled from 'styled-components'

export const Title = styled.h1`
  margin: 1em 0 1.5em;
  font-size: 2em;
  font-weight: 400;
  color: #444;
`

export const Error = styled.span`
  color: #f04444;
  margin-top: 10px;
  padding: 0 20px;
`

export const Input = styled.input`
  background: transparent;
  color: #444;
  min-height: 40px;
  outline: none;
  padding: 0 5px;
  border: 1px solid rgb(209, 213, 219);
`

export const Label = styled.label`
  color: #444;
  margin-bottom: 5px;
`

export const Result = styled.label`
  color: #444;
  margin: 15px 5px 0;
  font-size: 1.3em;
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const ResultContainer = styled(FormContainer)`
  justify-content: space-between;
  padding: 0 20px;
`

export const Container = styled.div`
  border: 1px solid rgb(209, 213, 219);
  padding: 10px;
  min-height: 250px;
  max-width: 700px;
  width: 100%;
`

export const ButtonSubmit = styled.button`
  width: 100%;
  color: white;
  background: #2569a2;
  min-height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px 0;
  font-size: 1em;
  font-weight: 600;
`

export const Select = styled.select`
  background: transparent;
  color: #444;
  min-height: 40px;
  outline: none;
  padding: 0 5px;
  border: 1px solid rgb(209, 213, 219);
  max-width: 220px;
  width: 100%;
`
