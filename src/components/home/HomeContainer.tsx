import React from 'react'
import Head from 'next/head'
import styles from 'fonoma/styles/Home.module.css'
import { Container, Error, Title } from 'fonoma/components/common/styles'
import { Symbols } from 'fonoma/components/common/types'
import HomeForm from 'fonoma/components/home/components/HomeForm'

type Props = {
  symbols?: Symbols
  errorMessage?: string
}

export const HomeContext = React.createContext<Props>({})

const HomeContainer = ({ symbols, errorMessage }: Props) => {
  return (
    <>
      <Head>
        <title>Frontend Developer Test</title>
        <meta name="description" content="Frontend Developer Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Title>Exchange rate calculator</Title>
        <HomeContext.Provider value={{ symbols, errorMessage }}>
          <Container>
            <HomeForm />
            {errorMessage && <Error>{errorMessage}</Error>}
          </Container>
        </HomeContext.Provider>
      </main>
    </>
  )
}

export default HomeContainer
