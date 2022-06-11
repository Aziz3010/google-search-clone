import React from 'react';
import St from './Videos.module.css';
import Player from 'react-player/lazy';

function Videos({api}) {
  return (
    <section className={St.videos}>
        { api !== null ? api.map((data, index) => {
            return (
                <a href={data.link} key={index} target='_blank' rel="noreferrer" className={St.item}>
                    <Player url={data?.link} controls with="100%" height="100%"  />
                </a>
            )
        })
        :
            'There are not data'
        }    
    </section>
  )
}

export default Videos