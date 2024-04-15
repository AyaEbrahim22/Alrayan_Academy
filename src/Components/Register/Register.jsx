

import style from './Register.module.css'

export default function Register() {



    return <>

        <div className={style.registerComponent}>

            
         <form className={style.registerForm}>

<div className='w-100 text-center'>

    <h2 className='text-light'>Register Now</h2>

    <input type="text" name="" placeholder="Your name" className="form-control mb-3 mt-3" autoComplete='disapled' />
    <input type="email" name="" placeholder="Your Email" className="form-control mb-3"  autoComplete='disapled' />
    <input type="password" name="" placeholder="Password" className="form-control mb-3"  autoComplete='disapled' />
    <input type="password" name="" placeholder="Re-password" className="form-control mb-3"  autoComplete='disapled' />
    <input type="tel" name="" placeholder="Your phone" className="form-control"  autoComplete='disapled' />
    <button type='submit' className={`${style.registerBtn} btn w-100 mt-3 mb-3`}>Sign Up</button>
    <span className='text-light'>Already have an account? Login</span>
</div>

</form>
         </div>


    </>
}
