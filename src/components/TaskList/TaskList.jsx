//=============== Before ========================

// import { Task } from 'components/Task/Task';
// import css from './TaskList.module.css';
// import { statusFilters } from 'redux/constants';
// import { useSelector } from 'react-redux';
// import { getStatusFitler, getTasks } from 'redux/selectors';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
//   const tasks = useSelector(getTasks);
//   const statusFilter = useSelector(getStatusFitler);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   return (
//     <ul className={css.list}>
//       {visibleTasks.map(task => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

//=============== After ========================

// import { useSelector } from 'react-redux';
// import { Task } from 'components/Task/Task';

// import { statusFilters } from 'redux/constants';
// import css from './TaskList.module.css';
// import { selectStatusFitler, selectTasks } from 'redux/selectors';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
//   const tasks = useSelector(selectTasks);
//   const statusFilter = useSelector(selectStatusFitler);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   return (
//     <ul className={css.list}>
//       {visibleTasks.map(task => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

//=============== After code refactoring logic in selectors.js ========================

import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';

import css from './TaskList.module.css';
import { selectVisibleTasks } from 'redux/selectors';

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
