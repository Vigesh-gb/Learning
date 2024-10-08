import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>Is Married</th>
            <td>{props.isMarried ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Corrected: Change 'proTypes' to 'propTypes'
Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isMarried: PropTypes.bool.isRequired,
};

export default Student;
