import { useNavigate } from 'react-router-dom'
import style from './Login.module.css'


export default function Login() {
 
  let navigate = useNavigate();

 function Navigate(){

  navigate('/dashboard')
 }
 
 return <>
    <div className={style.loginComponent}>

      <div className='container'>
        <form>

          <div className='w-100 text-center'>

            <h2 className='text-light'>Login Now</h2>

            <input type="email" name="" placeholder="Your Email" className="form-control mb-3" autoComplete='disapled' />
            <input type="password" name="" placeholder="Password" className="form-control mb-3" autoComplete='disapled' />
            <button onClick={() => Navigate()} type='submit' className={`${style.loginBtn} btn w-100 mt-3 mb-3`}>Sign In</button>
          </div>

        </form>
      </div>


    </div>


  </>
}
