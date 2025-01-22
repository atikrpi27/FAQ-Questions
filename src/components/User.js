import React from 'react';
import PropTypes from 'prop-types';

const User = ({ id,name, username, email, phone }) => {
  return (
    <article className="user">
      <h3>{id}</h3>
      <h3 className="user__fullname">{name.firstname + " " + name.lastname}</h3>
      <h3 className="user__name">{username}</h3>
      <p className="user__email">{email}</p>
      <a className="user__phone" href={'tel:+' + phone}>
        {phone}
      </a>
    </article>
  );
};

User.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default User;
