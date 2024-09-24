

import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axios } from 'axios';


const Review = () => {
  const history = useHistory();


  const feeling = useSelector(store => store.feelingsReducer)
  console.log('feeling:', feeling)
  const understanding = useSelector(store => store.understandingReducer)
  console.log('understanding', understanding)
  const supported = useSelector((store) => store.supportedReducer)
  console.log('supported:', supported)
  const comments = useSelector(store => store.commentsReducer)
  console.log('fcomments', comments)

  //  const ReviewAnswers = createSelector (
  //   [feeling, understanding, supported, comments], (a,b,c,d) => {

  const feedback = () => {
    axios({
      method: "POST",
      url: "/api/feedback",

      data: {
        feeling: feeling,
        understanding: understanding,
        supported: supported,
        comments: comments
      }

    }).then((response) => {
      console.log('hit in POST call', response.data)

      history.push('/')
    })
      .catch((err) => {
        console.log('oops, something went wrong with your feedback post', err)


})


  }   



    return  (
      <>
        <div>
          <h2>Review your Feedback</h2>

          <h1> Feeling: {feeling} </h1>
          <h1> Understanding: {understanding} </h1>
          <h1> Supported: {supported} </h1>
          <h1> Comments: {comments} </h1>


          <button onClick={feedback} type='submit'>Home</button>

        </div>
    </>
  );
}




     
    
    export default Review;