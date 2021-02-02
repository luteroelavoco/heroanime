import React,{useEffect} from 'react';
import Head from 'next/head'
import CardAnime from '../../components/CardAnime';
import Pagination from '../../components/Pagination';
import api from '../../services/api';
import { Container, Title,ListAnimes } from '../../styles/pages/Animes';

const limit = 20;
function Animes ({ animes, count }){

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  return (
    <Container>
      <Head>
        <title>Hero anime : more animes</title>
      </Head>
      <Title> {animes.length > 0 ? "Find here yours animes" : "Sorry! No anime found"}</Title>
      <ListAnimes>
        {animes.map((anime => (
          <CardAnime key={anime.id} anime={anime} />
        )))}
      </ListAnimes>
      {animes.length > 0 && <Pagination count={count} limit={limit} />}
    </Container>
  );
}

export async function getAnimes(search: string, offset: number){
  const { data } = await api.get('/anime',{
    params: {
      "filter[text]": search,
      "page[limit]": limit,
      "page[offset]": offset
    }
  })
  return {
    data: data.data,
    meta: data.meta
  }
}

export async function getServerSideProps({query}){
  const {q , offset = 0} = query;
  const res =   await getAnimes(q, offset)
  return {
    props: {
      animes : res.data,
      count: res.meta.count
    }
  }
}
export default Animes;