import React from 'react';
import St from './All.module.css'

function All({api}) {
  return (
    <section className={St.all}>
        { api !== null ? api?.map((data, index) => {
            return (
                <a href={data?.link} key={index} target='_blank' rel="noreferrer" className={St.item}>
                    <span>{data['title'] || data['href'] || data['domain'] }</span>
                    <h2>{data?.title?.length > 20 ? data?.title.slice(0,20)+'...' : data?.title}</h2>
                    <p>{data?.description?.length > 200 ? data?.description.slice(0,200)+'...' : data?.description}</p>
                </a>
            )
        })
        :
            null
        }
    </section>
  )
}

export default All;