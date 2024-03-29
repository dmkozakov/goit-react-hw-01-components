import css from './Statistics.module.css';

interface Stat {
  id: string;
  label: string;
  percentage: number;
}

interface Prop {
  title?: string;
  stats: Stat[]
}

export function Statistics({ title, stats }: Prop) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat__list}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

