import React,{useEffect} from 'react';
import "../../styles/pages/Animes.less"
import Head from 'next/head'
import {Typography} from 'antd'
import CardAnime from '../../components/CardAnime';
import Pagination from '../../components/Pagination';
import api from '../../services/api';

const {Title} = Typography;
const limit = 20;
function Animes ({ animes, count }){

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  return (
    <div className="container-page-animes">
      <Head>
        <title>Hero anime : more animes</title>
      </Head>
      <Title> {animes.length > 0 ? "Find here yours animes" : "Sorry! No anime found"}</Title>
      <ul>
        {animes.map((anime => (
          <CardAnime key={anime.id} anime={anime} />
        )))}
      </ul>
      {animes.length > 0 && <Pagination count={count} limit={limit} />}
    </div>
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