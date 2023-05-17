import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section class={css.statistics}>
      {title && <h2 class={css.title}>{title}</h2>}

      <ul class={css.stat__list}>
        {stats.map(stat => (
          <li class={css.item} key={stat.id}>
            <span class={css.label}>{stat.label}</span>
            <span class={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
