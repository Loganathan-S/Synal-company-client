import Joi from 'joi';

export const authValidation = {
  register: () => Joi.object({
    firstName: Joi.string().required().min(3)
      .pattern(new RegExp('^[a-zA-Z ]+$'))
      .messages({
        "string.empty": "Enter valid first name",
        "string.required": "First name is required",
        "string.min": "First name must be minimum 3 character",
        "string.pattern.base": "First name did not allow any special character or number",
      }),
    lastName: Joi.string().trim().required().min(1)
      .pattern(new RegExp('^[a-zA-Z ]+$'))
      .messages({
        "string.empty": "Enter valid last name",
        "string.required": "Last name is required",
        "string.min": "Last name must be minimum 3 character",
        "string.pattern.base": "Last name did not allow any special character or number",
      }),
    emailAddress: Joi.string().trim().email({ tlds: false }).messages({
      "string.empty": "Enter valid email address",
      "string.required": "Email address is required",
      "string.email": "Enter valid email address",
    }),
    mobileNumber: Joi.string().trim().required().min(5).pattern(new RegExp('^[0-9]+$')).messages({
      "string.empty": "Enter valid mobile number",
      "string.required": "Mobile number is required",
      "string.min": "Mobile number must be minimum 5 character",
      "string.pattern.base": "Mobile number did not allow any special character",
    }),
    country: Joi.string().trim().required().min(2).pattern(new RegExp('^[a-zA-Z0-9 ]+$'))
      .messages({
        "string.empty": "Enter valid country",
        "string.required": "Country is required",
        "string.min": "Country must be minimum 2 character",
        "string.pattern.base": "Country did not allow any special character",
      }),
    state: Joi.string().trim().required().min(2).pattern(new RegExp('^[a-zA-Z0-9 ]+$'))
      .messages({
        "string.empty": "Enter valid state",
        "string.required": "State is required",
        "string.min": "State must be minimum 5 character",
        "string.pattern.base": "State did not allow any special character",
      }),
    city: Joi.string().trim().required().min(2)
      .pattern(new RegExp('^[a-zA-Z0-9 ]+$'))
      .messages({
        "string.empty": "Enter valid city",
        "string.required": "City is required",
        "string.min": "City must be minimum 5 character",
        "string.pattern.base": "City did not allow any special character",
      }),
    pincode: Joi.string().trim().required().min(6).pattern(new RegExp('^[0-9]+$')).messages({
      "string.empty": "Enter valid pincode",
      "string.required": "Pincode is required",
      "string.min": "pincode must be length 6 character",
      "string.pattern.base": "pincode did not allow any special character",
    }),
  })
}