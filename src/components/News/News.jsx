import React from 'react';
import St from './News.module.css';

function News({api}) {
  return (
    <section className={St.news}>
        { api !== null ? api.map((data, index) => {
            return (
                <a href={data.link} key={index} target='_blank' rel="noreferrer" className={St.item}>
                    <h2>{data.title}</h2>
                    <span>{data.published}</span>
                </a>
            )
        })
        :
            null
        }    
    </section>
  )
}

export default News