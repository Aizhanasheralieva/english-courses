import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 className="fs-3">Learn English online and improve your skills through our high-quality courses and resources.</h1>
      <p>Everything you find here has been specially created by the British Council, the world's English teaching
        experts.</p>
      <h2 className="fs-3">We provide you with the right tools to help you interact confidently in the real world.</h2>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="cols-5">
          <img
            src="https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/630x680/public/2023-04/RS9171_GettyImages-1391836113_1440x960_0.jpg?itok=5DFIIUea"
            alt="LearnEnglish"/>
        </div>
        <div className="cols-8">
          <h4 className="fs-3 ms-4">Skills</h4>
          <ul><p>Practise your listening, reading, writing and speaking and learn useful language to use at work or to communicate effectively with friends.</p>
          <li>
            Audio and video to practise your listening and speaking skills.
          </li>
            <li>
              Model texts for all types of writing tasks.
            </li>
            <li>
              Work on your reading skills to read more quickly and understand more.
            </li>
          </ul>
          <button type="button" className="btn btn-primary ms-5">Start learning</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
