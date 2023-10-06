import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Uncomment import statements below after building queries and mutations
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TECH } from '../utils/queries';
import { ADD_MATCHUP } from '../utils/mutations';

const Matchup = () => {
  const [formData, setFormData] = useState({
    tech1: 'JavaScript',
    tech2: 'JavaScript',
  });
  let navigate = useNavigate();
  const { data } = useQuery(QUERY_TECH);
  const techList = data?.techs || [];
  const [addMatchup] = useMutation(ADD_MATCHUP);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMatchup({
        variables: formData,
      });

      const matchup = data.addMatchup
      console.log(matchup);
      navigate(`/matchup/${matchup._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      tech1: 'JavaScript',
      tech2: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <label>Tech 1: </label>
          <select name="tech1" onChange={handleInputChange}>
            {techList.map((tech) => {
              return (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              );
            })}
          </select>
          <label>Tech 2: </label>
          <select name="tech2" onChange={handleInputChange}>
            {techList.map((tech) => {
              return (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              );
            })}
          </select>
          <button className="btn btn-danger" type="submit">
            Create Matchup!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Matchup;
