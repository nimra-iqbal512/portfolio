import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { javascript } from '../assets'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // UvvLXSFamxLano-Db
    // template_d4aixvf
    // service_akmmr5u

    emailjs.send(
      'service_akmmr5u',
      'template_d4aixvf',
      {
        name: form.name,  //sender name
        to_name: 'Nimra',
        email: form.email,  //sender email
        to_email: 'nimraiqbal512@gmail.com',
        message: form.message,  //sender message
      },
      'UvvLXSFamxLano-Db'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you! I will get back to you ASAP.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        setLoading(false);
        console.error(error);
        alert('Something went wrong.');
      });
  }

  return (
    <div className='xl-mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden xl:justify-between'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='xl:[0.75] bg-black-100 p-8 rounded-2xl xl:w-[500px] w-full'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              rows="7"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none' />
          </label>

          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl'
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")