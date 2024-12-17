import React from 'react';
import PropTypes from 'prop-types';

const PageContent = ({ children }) => {
  return (
    <main className="container mx-auto px-4 py-8">
      {children}
    </main>
  );
};

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContent;