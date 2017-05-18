import React from 'react';
import Error from 'components/error';

const notFound = () => {
  return (
    <Error
        buttonText="Back to homepage"
        header="404"
        row1="Page not found"
        row2="We are sorry but the page you are looking for does not exist."
    />
  );
};

export default notFound;
