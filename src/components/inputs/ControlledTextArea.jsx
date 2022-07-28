import {useController} from "react-hook-form"
import TextArea from "./TextArea"

const ControlledTextArea = ({...props}) => {
  return (
    <TextArea {...props}/>
  )
}

export default ControlledTextArea