import React from 'react';

import ProjectTreeContainer from 'src/containers/ProjectTree';

export const UserPage = props => {

  const { userId } = props.match.params;

  return (
    <ProjectTreeContainer userId={userId} />
  );
};

export default UserPage;