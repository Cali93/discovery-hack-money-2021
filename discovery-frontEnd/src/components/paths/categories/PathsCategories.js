import { useQuery } from '@apollo/client';
import React from 'react';
import { getCategories } from '../../../graphql/categories';
import Categories from './Categories';
export default function PathsCategories() {
  const { loading, error, data } = useQuery(getCategories);

  if (loading) return <h2 style={{ paddingTop: '3rem', minHeight: '600px' }}>Loading...</h2>;
  if (error) return <p>Error :(</p>;
  if (data?.getCategories) {
    console.log('data', data)
  }
  return <Categories categories={data?.getCategories}/>
}
