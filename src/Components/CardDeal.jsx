import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' />in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed messa etiam. Mauris euadipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus neque. Fusce ultrices ametodio aenean neque.
        </p>
        <Button className="mt-5" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal