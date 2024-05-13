import { useNavigate } from 'react-router-dom'
import style from './Login.module.css'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';

export default function Login() {
 
  let navigate = useNavigate();

  const [error, setError] = useState(null)

  async function loginSubmit(values){
   let {data} =  await axios.post('https://alrayan-backend.online-academy.site/api/dashboard/login', values)
   .catch( (err) => setError(err.response.data.message))
   console.log(data);
   console.log(formik);
   if(data.message === 'success'){
    navigate('/dashboard')
    localStorage.setItem('AdminToken', data.token)
   }
  }

  let validationSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Invalid Email'),
    password: Yup.string().required('Password is required').matches(/[0-9]{6}/, 'Invalid Password')
  })

  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, onSubmit: loginSubmit
    , validationSchema
    
  })
 
 return <>
    <div className={style.loginComponent}>

      <div className='container'>
        <div className={style.formContent}>
        <form onSubmit={formik.handleSubmit}>

<div className='w-100 text-center'>

  <h2 className='text-light'>Login Now</h2>

  {error? <p className='text-light fs-4'>{error}</p> : null}

  <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" placeholder="Your Email" className="mb-3" autoComplete='disapled' />
  {formik.errors.email && formik.touched.email ? <p className='text-light fs-4'>{formik.errors.email}</p> : null}
  <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password" placeholder="Password" className="mb-3" autoComplete='disapled' />
  {formik.errors.password && formik.touched.password ? <p className='text-light fs-4'>{formik.errors.password}</p> : null}

  <button type='submit' className={`${style.loginBtn} mt-3 mb-3`}>Sign In</button>
</div>

</form>
        </div>
        
      </div>


    </div>


  </>
}
