import { useSelector, useDispatch } from "react-redux";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { FILTERS } from "../../constants";
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector((state) => state.todosFilter.filter);
  const dispatch = useDispatch();

  return (
    <ToggleButtonGroup
      color="primary"
      value={filter}
      exclusive
      onChange={(e) => dispatch(setFilter(e.target.value))}
    >
    <ToggleButton value={FILTERS.ALL}>{FILTERS.ALL}</ToggleButton>
      <ToggleButton value={FILTERS.COMPLETED}>{FILTERS.COMPLETED}</ToggleButton>
      <ToggleButton value={FILTERS.CURRENT}>{FILTERS.CURRENT}</ToggleButton>
      </ToggleButtonGroup>
  );
};