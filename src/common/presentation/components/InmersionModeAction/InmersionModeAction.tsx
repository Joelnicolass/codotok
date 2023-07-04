import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import {
  offInmersion,
  onInmersion,
} from "../../providers/redux/slices/modes/modes.slice";
import Actions from "../Actions/Actions";
import { FaEye } from "react-icons/fa";

const InmersionModeAction = () => {
  const dispatch = useAppDispatch();
  const inmersionMode = useAppSelector((state) => state.modes.inmersion);

  const toggleInmersionMode = () => {
    inmersionMode ? dispatch(offInmersion()) : dispatch(onInmersion());
  };
  return (
    <Actions>
      <Actions.Action onClick={toggleInmersionMode}>
        <FaEye
          style={{
            transform: `scale(${inmersionMode ? 1.5 : 1})`,
            transition: "transform 0.3s ease",
          }}
        />
      </Actions.Action>
    </Actions>
  );
};

export default InmersionModeAction;
