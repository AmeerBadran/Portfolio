import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';  // Import the EmailJS SDK
import { toast } from 'react-toastify';

const ContactForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  // Initial form values
  const initialValues = {
    fullName: '',
    email: '',
    message: '',
  };

  // Form submission handler
  const onSubmit = (values, { resetForm }) => {
    // EmailJS service parameters
    const serviceID = 'service_mubfs0c'; // Replace with your EmailJS service ID
    const templateID = 'template_d6gh41e'; // Replace with your EmailJS template ID
    const userID = 'rVqaFlF2NIt-exij6';  // Replace with your EmailJS user ID

    // Mapping form values to EmailJS template fields
    const templateParams = {
      from_name: values.fullName,
      from_email: values.email,
      message: values.message,
      to_name: 'Recipient Name', // You can set this to the recipient's name or leave it dynamic
    };

    // Send email via EmailJS
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success('Your message has been sent!');
        resetForm(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast.error('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className="2md:w-[60%] py-12">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-lg font-medium mb-2">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <Field
              name="fullName"
              type="text"
              className="w-full p-4 bg-[#EDEDED]"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Your Email Address <span className="text-red-500">*</span>
            </label>
            <Field
              name="email"
              type="email"
              className="w-full p-4 bg-[#EDEDED]"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <Field
              name="message"
              as="textarea"
              className="w-full p-3 bg-[#EDEDED]"
              rows="3"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className='bg-[#F64E32] text-sm text-white font-bold px-10 py-5 uppercase shadow-box hover:shadow-hoverbox transition-all duration-500'>
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
