import {
  ButtonSubmit,
  Error,
  Form,
  FormContainer,
  FormItem,
  Input,
  Label,
  Result,
  ResultContainer,
} from 'fonoma/components/common/styles'
import useForm from 'fonoma/components/home/components/useForm'
import SelectItem from 'fonoma/components/home/components/SelectItem'
import React from 'react'

const HomeForm = () => {
  const { data, result, toKey, error, setResult, onSubmit } = useForm()

  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormContainer>
          <FormItem>
            <Label htmlFor={'amount'}>Amount</Label>
            <Input name={'amount'} autoFocus pattern={`[0-9]+([,\\.][0-9]+)?`} />
          </FormItem>

          <SelectItem
            name={'from'}
            label={'From'}
            options={data}
            onChange={() => {
              result && setResult(null)
              toKey.current = ''
            }}
          />

          <SelectItem name={'to'} label={'To'} options={data} />
        </FormContainer>

        <ButtonSubmit type={'submit'}>Convert</ButtonSubmit>
      </Form>

      {error && <Error data-testid={'form-error'}>{error}</Error>}
      {result && (
        <ResultContainer>
          <div>
            <Label>Result:</Label>
            <Result>
              {result?.amount || ''} {toKey.current}
            </Result>
          </div>
          <Label>Rate: {result?.rate || ''}</Label>
        </ResultContainer>
      )}
    </>
  )
}

export default HomeForm
