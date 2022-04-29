import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ user }) => {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = user;
  const partnerSex = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `My ${partnerSex}'s name is ${partnerName}`
          : `I am not married`
        }
      </p>
    </section>
  );
};

Person.defaultProps = {
  user: {
    name: 'who am I?',
    sex: 'XY',
    age: 17,
    partnerName: 'Vasya',
  },
};

Person.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    sex: PropTypes.string,
    age: PropTypes.number,
    partnerName: PropTypes.string,
  }),
};
