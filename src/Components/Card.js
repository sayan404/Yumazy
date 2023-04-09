import { useNavigate } from 'react-router-dom'
import './Card.css'
export const Card = ({ allMealData  }) => {
let navigateTo = useNavigate();
  return (
    <>
      <div className="card" >
        <div className="content">
          <div className="front">
            <img className="profile" src={allMealData.images.REGULAR.url} />
            <h4>{allMealData.label}</h4>
          </div>
          <div className="back from-bottom">
          <button  className='read-more' onClick={ () => { navigateTo(`/${allMealData.label}`)}}>Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}