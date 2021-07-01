import React from 'react';
import Header from '../header/header';
import ButtonsGroup from '../buttonsGroup/buttonsGroup';
import SideBar from '../sideBar/sideBar';
import Details from '../details/details';
export default function projectContainer() {
  return (
    <div>
      <Header />
      <ButtonsGroup />
      <SideBar />
      <Details />
    </div>
  )
}
