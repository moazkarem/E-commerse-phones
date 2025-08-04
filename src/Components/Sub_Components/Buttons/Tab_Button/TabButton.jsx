import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
export default function TabButton({ tab, active, onClick }) {
  return (
    <button
      onClick={onClick}
      data-active={tab}
      className={`tab-button ${active === tab ? "tab-active" : ""}`}
    >
      <FormattedMessage id={tab}/>
    </button>
  );
}

TabButton.propTypes = {
  tab: PropTypes.string,
  active: PropTypes.string,
  onClick: PropTypes.func,
};
