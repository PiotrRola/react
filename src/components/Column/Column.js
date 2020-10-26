import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
      }
    
    static propTypes = {
        title: PropTypes.node,
        cards: PropTypes.array,
        icon: PropTypes.node,
        addCard: PropTypes.func,
        
    }
    static defaultProps = {
        icon: settings.defaultColumnIcon,
    }
    addCard(title) {
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
                title,
              },
            ],
          }
        ));
      }
    render() {
        const { title, icon, cards, addCard } = this.props;
        return (
        <section className={styles.component}>
            <h3 className={styles.title}>
            <span className={styles.icon}>
                <Icon name={icon} />
            </span>
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
           
            
        </section>
    )
}
}

export default Column;