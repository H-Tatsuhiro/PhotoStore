import ImgRender from '../components/ImgRender';
import firebase from 'firebase/app'

const username = firebase.auth().currentUser;
const userid = username?.uid;

function Top() {
    return (       
        <div>
          <h2>{userid}</h2>
          <h2>Top</h2>
          <ImgRender />
        </div>
    )
}

export default Top;