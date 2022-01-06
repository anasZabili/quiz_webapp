import { IconButton as IconButtonMUI, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IconButtonprops {
  onClick: () => void;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  [x: string]: any;
}

const IconButton: React.FC<IconButtonprops> = ({ onClick, Icon, ...props }) => {
  return (
    <IconButtonMUI edge="end" aria-label="delete" onClick={onClick} {...props}>
      <Icon color="primary" />
    </IconButtonMUI>
  );
};

export default IconButton;
