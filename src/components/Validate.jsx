export default function validate(input) {
    console.log(input.mail)
    let errors = {};
    if (!input.mail) {
      errors.mail = <h6>Mail is required</h6>;
    }else if (!/\S+@\S+\.\S+/.test(input.mail)) {
      errors.mail = <h6>Mail is invalid</h6>;
    }
    return errors;
  };