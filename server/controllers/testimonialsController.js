const Testimonials = require('../models/Testimonials');


exports.displayTestimonials = async (req, res) => {
   const testimonials =await res.render('testimonials', {
             pageTitle: 'Testimonials',
         })
 }

 exports.addTestimonials = (req, res) => {
    let {name, email, message} = req.body;

    // validate the form
    let errors = [];

    if (!name) {
        errors.push({'message': 'Add your Name'})
    }
    if (!email) {
        errors.push({'message': 'Add your Email'})
    }
    if (!message) {
        errors.push({'message': 'Add your Testimonial'})
    }

    console.log(errors);
    // check if there is an error
    if (errors.length > 0) {
        // we have some errors, display the warning to the view 
        res.render('testimonials', {
            pageTitle: 'Testimonials',
            errors,
            name,
            email,
            message
        });
    } else {
        //save to database
        Testimonials.create({
            name,
            email,
            message
        })
        .then(() => res.redirect('/testimonials'))
        .catch(error => console.log(error))
    }
}