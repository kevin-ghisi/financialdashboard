import { Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStylesBootstrap = makeStyles(() => ({
    arrow: {
        color: "#0047BB",
        width: 16
    },
    tooltip: {
        fontSize: 14,
        fontFamily: 'Montserrat',
        paddingTop: 4,
        paddingRight: 8,
        paddingBottom: 4,
        paddingLeft: 8,
        backgroundColor: "#0047BB",
        borderRadius: 4
    },
}));
  
export function CustomTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow placement="top" classes={classes} {...props} />;
}
