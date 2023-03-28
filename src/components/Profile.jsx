import React from 'react';

const Profile = () => {
  return (
    <div className='content'>
      <div className='content__head content-head'>
        <span className="content-head__name">
          King Monkey
        </span>
        <a href='#' className="content-head__tag">
          @JunglePartymaker
        </a>
      </div>
      <div className='content__body content-body'>
        <div className="content-body__top">
          <div className='content__img'>
            <img src="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"></img>
          </div>
        </div>
        <div className="content-body__info">
          <div className="content-body__logo">
            <img src="https://previews.123rf.com/images/helenfield/helenfield2101/helenfield210100106/164282764-vector-chimpanzee-portrait-ape-head-monkey-face.jpg" alt="" />
          </div>
          <p className="content-body__text">
            If you love bananas, jumping on trees and make parties in jungle? add me to friends? wi will meke a feat track! 
          </p>
        </div>
        <form action="" className='comment__form comment-form'>
          <textarea name="" id="" cols="30" rows="10" className="comment-form__textarea" placeholder='Leve a comment'>

          </textarea>
          <button className='comment-form__button' type="submit">Send</button>
        </form>
        <div className="content__posts content-posts">
          <div className="content-posts__item">
            <div className="content-posts__icon">

            </div>
            <span className="content-posts__text">
              Cool!!! Add me please
            </span>
          </div>
          <div className="content-posts__item">
            <div className="content-posts__icon">

            </div>
            <span className="content-posts__text">
              I hear tht you release a new track! Its AWSM
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile