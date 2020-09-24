import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {setCurrentDay,setCurrentWeek} from '../../redux/actions/index'
class Day extends Component {
  state = {
    classNames :['Day'],
    body :''
  }
  componentDidMount(){
    const {
      today,
      date,
      selected,
      classes,
      handleClick,
      children,
      setCurDay,
      setCurWeek
    } = this.props;
    const {classNames,body} = this.state;

    if (today.isSame(date, "day")) {
      this.setState((state) => {
        return{
          classNames : [...this.state.classNames,"today"]

        }
      }) 
    }
    if (selected && selected.isSame(date, "day")) {
      this.setState((state) => {
        return{
          classNames : [...this.state.classNames,"selected"]
        }
      }) 

      switch (date._d.getDay()) {
        case 0:
          setCurWeek("SUNDAY");
          break;
        case 1:
          setCurWeek("MONDAY");
          break;
        case 2:
          setCurWeek("TUESDAY");
          break;
        case 3:
          setCurWeek("WEDNESDAY");
          break;
        case 4:
          setCurWeek("THURSDAY");
          break;
        case 5:
          setCurWeek("FRIDAY");
          break;
        case 6:
          setCurWeek("SATURDAY");
          break;
        default:
          break;
      }

      setCurDay(date.format("DD"));
    }

    if (!!children) {
      this.setState((state) => {
        return {
          body: children
        }
      }) 
    } else {
      this.setState((state) => {
        return {
          body:  (<button
          className="Day-inner"
          onClick={() => handleClick(date)}
          type="button"
        >
          {date.format("DD")}
        </button>
      )
        
      }}) 
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
      setCurDay,
      setCurWeek
    } = this.props;
    const {classNames,body} = this.state;
    console.log(this.state)
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
  return {}
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
