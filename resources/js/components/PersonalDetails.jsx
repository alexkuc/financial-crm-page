const PersonalDetails = ({ details }) => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            {Object.keys(details).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(details).map((key) => (
              <td key={details[key]}>{details[key]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PersonalDetails;
