import React from 'react';
import St from './Images.module.css'

function Images({api}) {
  return (
    <section className={St.images}>
        { api !== null ? api?.map((data, index) => {
            return (
                <a href={data?.link?.href} key={index} target='_blank' rel="noreferrer" className={St.item}>
                    <img src={data?.image?.src} alt={'img-' + index} />
                </a>
            )
        })
        :
            null
        }
    </section>
  )
}

export default Images;