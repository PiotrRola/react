import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
     
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  }
    render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}
        image={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title={'Arbuz'}/>
          <Column title={'Nektarynka'}/>
          <Column title={'Banan'}/>
        </div>
        
      </section>
    )
  }
}

export default List;
