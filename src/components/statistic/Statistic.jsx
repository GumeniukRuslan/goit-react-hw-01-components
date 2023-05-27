import css from './Statistic.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (<section className={css.statistics}>
  {title && <h2 className="title">{title}</h2>}

  <ul className={css.statList}>
      {stats.map(item => {
        return <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
      </li>
    })}
  </ul>
</section>)
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string
} 