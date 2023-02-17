import styles from './App.module.css';
import Header from './components/Header';
import Queue from './components/Queue';
import Calendar from './components/Calendar';

export default function App() {
  return (
    <div class={styles.App}>
      <Header />
      <main>
        <Queue />
        <Calendar />
      </main>
    </div>
  );
}