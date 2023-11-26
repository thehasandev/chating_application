import React, { useEffect } from 'react'
import gOne from "../assets/g2.png"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function GroupList() {

  return (
    <div className='list'>
      <h2>Groups List <BiDotsVerticalRounded /></h2>
    <div className='scroll'>
      <div className='list-item'>
        <div>
          <img src={gOne} alt="g1" />
        </div>
        <div>
            <h3>Friends Reunion</h3>
            <p>Hi Guys, Wassup!</p>
        </div>
        <div>
            <button>Join</button>
        </div>
      </div>
      
      <div className='list-item'>
        <div>
          <img src={gOne} alt="g1" />
        </div>
        <div>
            <h3>Friends Reunion</h3>
            <p>Hi Guys, Wassup!</p>
        </div>
        <div>
            <button>Join</button>
        </div>
      </div>
      
      <div className='list-item'>
        <div>
          <img src={gOne} alt="g1" />
        </div>
        <div>
            <h3>Friends Reunion</h3>
            <p>Hi Guys, Wassup!</p>
        </div>
        <div>
            <button>Join</button>
        </div>
      </div>

      <div className='list-item'>
        <div>
          <img src={gOne} alt="g1" />
        </div>

        <div>
            <h3>Friends Reunion</h3>
            <p>Hi Guys, Wassup!</p>
        </div>

        <div>
            <button>Join</button>
        </div>
      </div>

    </div>


    </div>
  )
}

export default GroupList