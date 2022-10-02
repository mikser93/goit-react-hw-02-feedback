import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <section className={s.section}>
        <p className={s.title}>{this.props.title}</p>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
