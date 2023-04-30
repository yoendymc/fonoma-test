import { ApiResponse } from 'fonoma/components/common/types'
import HomeContainer from 'fonoma/components/home/HomeContainer'

export const getStaticProps = async () => {
  const myHeaders = new Headers()
  myHeaders.append('apikey', 'uCHILImSTEQTFEzw36MzrektAQ7HNryf')
  const requestOptions: RequestInit = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  }

  let errorMessage = ''
  const data: ApiResponse = await fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      errorMessage = error.message
      return []
    })
  return {
    props: {
      symbols: data?.symbols || [],
      errorMessage: data?.message || '',
    }
  }
}

export default HomeContainer
