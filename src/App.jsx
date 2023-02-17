import styles from './App.module.css';
import Header from './components/Header';
import Queue from './components/Queue';
import Calendar from './components/Calendar';

export default function App() {
  return (
    <div class="bg-gray-700 text-white grid grid-flow-row grid-rows-[min-content_1fr] h-screen ">
      <Header/>
      <main class="grid grid-flow-col">
        <Queue />
        <Calendar />
      </main>
    </div>
  );
}