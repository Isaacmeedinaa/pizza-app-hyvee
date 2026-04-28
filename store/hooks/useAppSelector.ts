import { useSelector } from "react-redux";
import { AppState } from "../store";

const useAppSelector = useSelector.withTypes<AppState>();

export default useAppSelector;
