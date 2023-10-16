import React from 'react';

function Portfolio() {
  const portfolioStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const listStyle = {
    textAlign: 'left',
  };

  return (
    <div style={portfolioStyle}>
      <p>
      Positive attitude. Highly focused on a particular topic. I
am interested in exploring new areas of work which
enhances my knowledge. That helps me in enhancing
my skills, strengthening my knowledge and finding out
my potential. Always thinks in a creative manner.
      </p>
      <hr style={{ width: '50%', margin: '20px auto' }} />
      <h3>Skills</h3>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={listStyle}>
              <ul>
                <li>Web Development</li>
                <li>Programming in Java</li>
                <li>Programming in C</li>
                <li>Creative Thinking</li>
                <li>Drawing</li>
              </ul>
            </td>
            <td style={listStyle}>
              <ul>
                <li>⭐⭐⭐⭐</li>
                <li>⭐⭐⭐⭐</li>
                <li>⭐⭐⭐</li>
                <li>⭐⭐⭐⭐</li>
                <li>⭐⭐⭐⭐⭐</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Hobbies</h3>
      <ol style={listStyle} type="i">
        <li>Badminton</li>
        <li>Watching Movies</li>
        <li>Listening Music</li>
        <li>Programming</li>
      </ol>
      <h3>Education</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019</td>
            <td>Kendriya Vidyalaya</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>Sri Vishnu Junior College</td>
          </tr>
          <tr>
            <td>Present</td>
            <td>VIT-AP University</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Portfolio;