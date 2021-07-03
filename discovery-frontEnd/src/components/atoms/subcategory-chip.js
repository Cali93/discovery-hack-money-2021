import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useHistory } from 'react-router-dom';



export default function SubCategoryChip({ id, name, parentCategoryName, projects }) {
  const history = useHistory();
  const handleClick = () => {
    return history.push(`/subcategories`, {
      projects
    })
  };
  return (
      <Chip label={name} disabled variant='outlined' onClick={handleClick} />
  );
}