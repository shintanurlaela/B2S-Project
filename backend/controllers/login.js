const userModel = require('../models/index').user;
const joi = require('joi');

// Validate input for login
const validateLoginInput = (input) => {
  let rules = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required(),
  });
  let { error } = rules.validate(input);
  if (error) {
    let message = error.details.map((item) => item.message).join(',');
    return {
      status: false,
      message: error.message,
    };
  }
  return {
    status: true,
  };
};

exports.login = async (request, response) => {
  try {
    let { username, password } = request.body;

    // Validate login input
    let resultValidation = validateLoginInput(request.body);
    if (resultValidation.status === false) {
      return response.json({
        status: false,
        message: resultValidation.message,
      });
    }

    // Check if user exists
    const user = await userModel.findOne({ where: { username, password } });

    if (user) {
      // Check user role
      if (user.role === 'admin') {
        // Admin login
        return response.json({
          status: true,
          message: "Login berhasil",
          role: 'admin', // Include role in response
        });
      } else if (user.role === 'siswa') {
        // Siswa login
        return response.json({
          status: true,
          message: "Login berhasil",
          role: 'siswa', // Include role in response
        });
      }
    }

    // If user doesn't exist or role is invalid
    return response.json({
      status: false,
      message: "Username atau password salah",
    });

  } catch (error) {
    return response.json({
      status: false,
      message: error.message,
    });
  }
};
