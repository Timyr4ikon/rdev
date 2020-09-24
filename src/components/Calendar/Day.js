import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {setCurrentDay,setCurrentWeek} from '../../redux/actions/index'
class Day extends Component {
  componentDidUpdate(){
    const classNames = ["Day"];

    if (this.props.selected && this.props.selected.isSame(this.props.date, "day")) {
      classNames.push("selected");

      switch (this.props.date._d.getDay()) {
        case 0:
          this.props.setCurWeek("SUNDAY");
          break;
        case 1:
          this.props.setCurWeek("MONDAY");
          break;
        case 2:
          this.props.setCurWeek("TUESDAY");
          break;
        case 3:
          this.props.setCurWeek("WEDNESDAY");
          break;
        case 4:
          this.props.setCurWeek("THURSDAY");
          break;
        case 5:
          this.props.setCurWeek("FRIDAY");
          break;
        case 6:
          this.props.setCurWeek("SATURDAY");
          break;
        default:
          break;
      }

      this.props.setCurDay(this.props.date.format("DD"));
    }

  }
  render() {
    const {
      today,
      date,
      selected,
      classes,
      handleClick,
      children,
    } = this.props;

    const classNames = ["Day"];
    if (today.isSame(date, "day")) {
      classNames.push("today");
    }
    if (selected && selected.isSame(date, "day")) {
      classNames.push("selected");

     
    }

    let body;
    if (!!children) {
      body = children;
    } else {
      body = (
        <button
          className="Day-inner"
          onClick={() => handleClick(date)}
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          {date.format("DD")}
        </button>
      );
    }

    return (
      <td
        className={[...classNames, ...classes].join(" ")}
        data-date={date.toISOString()}
        data-day={date.format("DD")}
      >
        {body}
      </td>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurDay: (x) => dispatch(setCurrentDay(x)),
    setCurWeek: (x) => dispatch(setCurrentWeek(x))

  }
}
Day.propTypes = {
  handleClick: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  today: PropTypes.object.isRequired,
  selected: PropTypes.object,
  children: PropTypes.node,
};

export default connect(mapStateToProps,mapDispatchToProps)(Day);
