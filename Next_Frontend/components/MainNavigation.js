import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <div>
      <header className={classes.header}>
        <img src="TS.png" alt="ST"></img>
        <nav>
          <titles>
            <space>
              <Link href="/">Home</Link>
            </space>
            <space>
              <Link href ="/ChartPage">Activity Graph</Link>
            </space>
            <space>
              <Link href ="/GaugePage">Total Activity</Link>
            </space>
          </titles>
        </nav>
      </header>
    </div>
  )
}

export default MainNavigation