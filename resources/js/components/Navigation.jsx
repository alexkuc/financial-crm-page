import { NavLink } from 'react-router-dom';

/**
 * Supply style for active link
 * @param {Bool} isActive supplied by React Router
 */
function styleLink({ isActive }) {
  return {
    color: isActive ? 'red' : 'blue',
  };
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="personal-details" style={styleLink}>
            Personal Details
          </NavLink>
        </li>
        <li>
          <NavLink to="notes" style={styleLink}>
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="activity" style={styleLink}>
            Activity
          </NavLink>
        </li>
        <li>
          <NavLink to="trading-accounts" style={styleLink}>
            Trading Accounts
          </NavLink>
        </li>
        <li>
          <NavLink to="documents" style={styleLink}>
            Documents
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
