import React, { useState } from 'react';
import './App.css';
import Friends from './friends/Friends';
import Header from './Header/Header';
import joy from './images/joy.jpg';
import sourov from './images/sourov.jpg';
import mama from './images/mama.jpg';
import mehzabin from './images/Mehzabin-photo-19.jpg';
import mredul from './images/mredul.jpg';
import mazari from './images/Muniba-Mazari.jpg';
import prusion from './images/prusion.jpg';
import rafin from './images/rafin sir.jpg';
import rohanBasar from './images/rohan-basar.jpg';
import sajalAli from './images/sajal ali.jpg';
import sayem from './images/sayem.jpg'
import tisa from './images/Tanjin-Tisha-1910281238-1910281321.jpg';
import tazid from './images/tazid.jpg'
import rohan from './images/rohan.jpg'
function App() {
  const [fnd, setFnd] =useState([]);
  const handleAdd = (salary) =>{
    const newCart = [...fnd, salary]
    setFnd(newCart)
  }
  let total = 0;
  for (let i = 0; i < fnd.length; i++) {
    const salary = fnd[i];
    total = Number(salary) + total;
  }
  return (
    <div>
      <Header></Header>
      <h2 className="title"></h2>
        <div className = "display-container">
            <div>
            <Friends handleAdd = {handleAdd} name={'Gh Joy'} username={"gh_joy46415"} email = {'example@example.com'} phone = {'+124 0185 0654 5744'} website = {'www.faltu.com'} image={joy} salary={'4598.68'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Sourov Ahsan'} username={"crushkur_sourov"} email = {'example@example.com'} phone = {'+124 0185 0654 5744'} website = {'www.faltu.com'} image={sourov} salary={'3052.24'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Rafiqul Islam Mosharraf'} username={'mosharraf2024'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www.faltu.com'} image={mama} salary={'5000'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Mosaddek Hossain Rohan'} username={'affi_abdullah'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www.faltu.com'} image={rohan} salary={'5584.24'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Mehzabin Choudhuri'} username={'jatir_crush'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www.faltu.com'} image={mehzabin} salary={'4584.24'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Maharab Hossain Mredul'} username={'mredul1475'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www.faltu.com'} image={mredul}  salary={'1012.99'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Muniba Mazari'} username={'muniba_mazari'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www.faltu.com'} image={mazari}  salary={'5500'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Eftemam Korim Prusion'} username={'rajnitibid_prusion'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www.faltu.com'} image={prusion}  salary={'100'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Abdullah Al Rafin'} username={'abdullah_rafin'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www,faltu.com'} image={rafin}  salary={'600'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Khairul Basar Rohan'} username={'rohan_basar'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www,faltu.com'} image={rohanBasar}  salary={'1000'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Sajal Ali'} username={'sajalAli'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www,faltu.com'} image={sajalAli}  salary={'3000'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Sayem Talukdar'} username={'sayem_talukdar'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www,faltu.com'} image={sayem}  salary={'500'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Tanjin Tisa'} username={'tanjin_tisa'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www,faltu.com'} image={tisa}  salary={'2780'}></Friends>
          <Friends handleAdd = {handleAdd} name={'Tanvir Ahmed Tazid'} username={'tazid_the_great'} email={'example@domain.com'} phone = {'+124 0185 0654 5744'} website = {'www,faltu.com'} image={tazid}  salary={'1011.54'}></Friends>
            </div>
          <div className = "summary">
            <h2>Summary</h2>
            <h3>Total Friend : {fnd.length} </h3>
            <h3>Total Salary: {parseFloat(total).toFixed(2)}</h3>
          </div>
        </div>
    </div>
  );
}

export default App;
