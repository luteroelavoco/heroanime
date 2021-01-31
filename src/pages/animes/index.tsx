import React, { useState, useEffect}from 'react';
import CardAnime from '../../components/CardAnime';
import api from '../../services/api';
import { Container, Title,ListAnimes } from '../../styles/pages/Animes';

const limit = 10;
function Animes ({ initialAnimes, count }){
  const [animes, setAnimes] = useState([])

  useEffect(() =>{
    setAnimes(initialAnimes)
  },[initialAnimes])
  return (
    <Container>
      <Title> Find here yours animes</Title>
      <ListAnimes>
        {animes.map((anime => (
          <CardAnime key={anime.id} anime={anime} />
        )))}
      </ListAnimes>
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
      initialAnimes : res.data,
      count: res.meta.count
    }
  }
}
export default Animes;