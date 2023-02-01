import React from 'react'
import Title from "../common/title/Title"

const AboutCard = () => {
  return (
    <>
        <section className='aboutHome'>
           <div className='container flexB'>
            <div className='left row'>
                <img src='./images/cute.webp' alt='' />
            </div>
            <div className='right row'>
                <Title subtitle='LEARN ANYTHING' title='Benifits About Online Learning Expertise' />
            </div>
           </div>
        </section>
    </>
  )
}

export default AboutCard