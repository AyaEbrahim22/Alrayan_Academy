
import { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from './HomeDemo.module.css';
import toast from 'react-hot-toast';


export default function HomeDemo() {

  function pressArabicBtn() {
    document.getElementById('videoIframe').setAttribute('src', 'https://www.youtube.com/embed/r6RxX0uEV-8?si=29ADno6j5K--tyUO');
    document.getElementById('EnglishBtn').classList.remove('d-none')
    document.getElementById('arabicBtn').classList.add('d-none')
  }

  function pressEnglishBtn() {
    document.getElementById('videoIframe').setAttribute('src', 'https://www.youtube.com/embed/-Q1cWyEG5W8?si=semS4sTNharpvM-q');
    document.getElementById('arabicBtn').classList.remove('d-none')
    document.getElementById('EnglishBtn').classList.add('d-none')
  }

  const [submitting, setSubmitting] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Invalid Email'),
    phone: Yup.string().required('Phone is required'),
    age: Yup.number().required('Age is required'),
    days: Yup.string().required('Days is required'),
  });

  async function submitForm(values) {
    setSubmitting(true);
    try {
      const { data } = await axios.post('https://alrayan-backend.online-academy.site/api/dashboard/add-enroll', values);
      console.log(data);
      clearForm()
      if (data.message === 'Enroll added successfully') {
        toast.success(`Your data has been sent successfully and We will contact you as soon as possible`, {
          duration: 8000,
          position: 'bottom-right',
          style: { fontWeight: 'bold',
                   marginBottom: '70px'
           },
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setSubmitting(false);

  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      course: 'quran',
      age: '',
      student_gender: 'male',
      teacher_gender: 'male',
      plan: '4 classes per month',
      days: ''
    }, onSubmit: submitForm
    , validationSchema
  });

  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('age').value = '';
    document.getElementById('stGender').value = 'male';
    document.getElementById('tchGender').value = 'male';
    document.getElementById('course').value = 'quran';
    document.getElementById('package').value = '4 classes per month';
    document.getElementById('days').value = '';
  }

  return (
    <div className={style.demoComponent}>

      <div className='container'>

        <div className='row g-4 justify-content-center align-items-center position-relative'>

          <div className='col-md-7'>
            <h3>Our Reliable Online Platform for <span> Islamic Education</span></h3>

            <iframe id='videoIframe' height={450} src="https://www.youtube.com/embed/-Q1cWyEG5W8?si=semS4sTNharpvM-q" className='w-100' title="demo">
            </iframe>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              <button id='arabicBtn' onClick={() => pressArabicBtn()} className={`${style.translateBtn} `}>Arabic</button>
              <button id='EnglishBtn' onClick={() => pressEnglishBtn()} className={`${style.translateBtn} d-none`}>English</button>
            </div>

          </div>

          <div className='col-md-5'>
            <div className={style.registerSection}>

              <form onSubmit={formik.handleSubmit}>
                <p className='text-center fw-bold fs-2'>
                  Here, get a free trial of Quran learning by enrolling with us today!
                </p>

                {/* Name */}
                <div className='row'>
                  <div className='col-md-12'>
                    {formik.touched.name && formik.errors.name && <p className='fs-5 mb-0 text-danger'>{formik.errors.name}</p>}
                    <label className='w-100 fw-bold fs-5'>Name:</label>
                    <input id='name' onBlur={formik.handleBlur} onChange={formik.handleChange} type='text' name='name' placeholder='Full Name' />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="mt-3">
                  <div className='row'>
                    {/* Email */}
                    <div className='col-md-6'>
                      {formik.touched.email && formik.errors.email && <p className='fs-5 mb-0 text-danger'>{formik.errors.email}</p>}
                      <label className='w-100 fw-bold fs-5'>Email:</label>
                      <input id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} type='email' name='email' placeholder='Your email..' />
                    </div>
                    {/* Phone */}
                    <div className='col-md-6'>
                      {formik.touched.phone && formik.errors.phone && <p className='fs-5 mb-0 text-danger'>{formik.errors.phone}</p>}
                      <label className='w-100 fw-bold fs-5'>Phone:</label>
                      <input id='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} type='tel' name='phone' placeholder='0100 123 4567' />
                    </div>
                  </div>
                </div>

                {/* Student Age and Gender */}
                <div className='mt-3'>
                  <div className='row'>
                    {/* Student Age */}
                    <div className='col-md-6'>
                      {formik.touched.age && formik.errors.age && <p className='fs-5 mb-0 text-danger'>{formik.errors.age}</p>}
                      <label className='w-100 fw-bold fs-5'>Student Age:</label>
                      <input id='age' onBlur={formik.handleBlur} onChange={formik.handleChange} type='number' name='age' placeholder='15' />
                    </div>
                    {/* Student Gender */}
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Student Gender:</label>
                      <select id='stGender' onBlur={formik.handleBlur} onChange={formik.handleChange} name='student_gender' className='w-100'>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Teacher Gender and Course Title */}
                <div className='mt-3'>
                  <div className='row'>
                    {/* Teacher Gender */}
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Teacher Gender:</label>
                      <select id='tchGender' onBlur={formik.handleBlur} onChange={formik.handleChange} name='teacher_gender' className='w-100'>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    {/* Course Title */}
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Course Title:</label>
                      <select id='course' onBlur={formik.handleBlur} onChange={formik.handleChange} name='course' className='w-100'>
                        <option value="quran">Quran</option>
                        <option value="fiqh">FIQH</option>
                        <option value="aqeedah">AQEEDAH</option>
                        <option value="tajweed">TAJWEED</option>
                        <option value="hadith">HADITH</option>
                        <option value="arabic">ARABIC</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Desired package and Preferred Days */}
                <div className='mt-3'>
                  <div className='row'>
                    {/* Desired package */}
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Desired package:</label>
                      <select id='package' onBlur={formik.handleBlur} onChange={formik.handleChange} name='plan' className='w-100'>
                        <option value="4 classes per month">4 classes per month</option>
                        <option value="8 classes per month">8 classes per month</option>
                        <option value="12 classes per month">12 classes per month</option>
                        <option value="30 classes per month">30 classes per month</option>
                      </select>
                    </div>
                    {/* Preferred Days */}
                    <div className='col-md-6'>
                      <label className='w-100 fw-bold fs-5'>Preferred Days:</label>
                      {formik.touched.days && formik.errors.days && <p className='fs-5 mb-0 text-danger'>{formik.errors.days}</p>}
                      <textarea id='days' onBlur={formik.handleBlur} onChange={formik.handleChange} rows={1} name='days' className='w-100' placeholder='Sunday, Monday'></textarea>

                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button type='submit' className={style.messageBtn} disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


