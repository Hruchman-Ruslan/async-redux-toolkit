import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/operations';

export const TaskForm = () => {
  const dispath = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispath(addTask(event.target.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
