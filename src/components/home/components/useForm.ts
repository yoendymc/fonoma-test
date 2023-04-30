import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { HomeContext } from 'fonoma/components/home/HomeContainer'

type SelectData = Array<{ key: string; value: string }>
const useForm = () => {
  const { symbols } = useContext(HomeContext)
  const [data, setData] = useState<SelectData>([])
  const [error, setError] = useState<string>('')
  const [result, setResult] = useState<{ amount: number; rate: number } | null>(null)
  const toKey = useRef<string>('')

  useEffect(() => {
    try {
      if (symbols) {
        let data: SelectData = []
        Object.entries(symbols)?.map(([key, value]) => {
          data = [...data, { key, value }]
        })

        setData(data)
      }
    } catch (e) {
      console.log(e)
    }
  }, [])

  const getHMTLFormValues = (event: FormEvent<HTMLFormElement>) => {
    const elements = event.currentTarget?.elements
    let obj: any = {}

    if (!elements) return obj

    for (let i = 0; i < elements.length; i++) {
      const item: any = elements.item(i)
      if (item?.name) {
        obj[item.name] = item.value
      }
    }

    return obj
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const formProps = getHMTLFormValues(event)

      if (formProps?.from && formProps?.to && formProps?.amount && typeof +formProps?.amount === 'number') {
        error && setError('')
        const myHeaders = new Headers()
        myHeaders.append('apikey', 'uCHILImSTEQTFEzw36MzrektAQ7HNryf')

        const requestOptions: RequestInit = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders,
        }
        toKey.current = formProps?.to

        const data = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${formProps.to}&from=${formProps.from}&amount=${formProps.amount}`,
          requestOptions
        )
          .then((response) => response.json())
          .catch((error) => console.log('error', error))

        data?.result && setResult({ amount: data.result, rate: data.info?.rate })
        return
      }
      setError('Please, enter the amount you want to convert')
    } catch (e) {
      console.log(e)
    }
  }

  return { data, result, toKey, error, setError, setResult, onSubmit }
}

export default useForm
