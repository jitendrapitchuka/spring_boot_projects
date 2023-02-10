import React from 'react'
import Carousel from './components/Carousel'
import ExploreTopBooks from './components/ExploreTopBooks'
import Heros from './components/Heros'
import LibraryServices from './components/LibraryServices'

export default function Homepage() {
  return (
    <div>
    <ExploreTopBooks/>
    <Carousel/>
    <Heros/>
    <LibraryServices/>
    </div>
  )
}
