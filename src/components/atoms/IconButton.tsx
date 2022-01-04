import { IconButton  as IconButtonMUI, SvgIconTypeMap} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IconButtonprops {
    onClick: () => void
    Icon :  OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
}

const IconButton: React.FC<IconButtonprops> = ({ 
    onClick, 
    Icon 
}) => {
    return (
        <IconButtonMUI edge="end" aria-label="delete" onClick={onClick}>
            <Icon color="primary"/>
        </IconButtonMUI>
    )
  };
  
  export default IconButton;