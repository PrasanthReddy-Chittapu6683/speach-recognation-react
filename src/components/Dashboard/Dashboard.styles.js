const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(33, 43, 54)',
        transition: 'transform .55s ease',
        // transition: 'boxShadow 300ms cubic- bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundImage: 'none',
        overflow: 'hidden',
        boxShadow: 'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px',
        borderRadius: '16px',
        position: 'relative',
        zIndex: '0',

        paddingTop: '0px',
        "&:hover": {
            transform: 'scale(1.09) ',
            opacity: '1'
        }
    },

    avatar: {
        width: '144px',
        height: '62px',
        zIndex: '10',
        bottom: '-26px',
        position: 'absolute',
    },
    commingSoonBorder: {
        color: 'black', zIndex: '11', position: 'absolute',
        marginTop: '10px', marginLeft: 270
    },
    commingSoon: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        zIndex: 11,
        top: theme.spacing(3)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        zIndex: 11,
        color: '#fff',
        backgroundColor: '#14a37f',
        top: theme.spacing(3)
    },
    paperHeader: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        paddingTop: 'calc(56.25 %)'
    },
    paperBanner: {
        top: '0px',
        zIndex: '8',
        // width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        // left: '0px',
        // filter: ' blur(8px)'
    },
    paperTop: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        paddingTop: 'calc(56.25%)'
    },
    paperTitle: {
        margin: '48px 0px 0px',
        fontFamily: '"Be Vietnam", sans-serif',
        fontWeight: '600',
        fontSize: '1rem',
        lineHeight: '1.5',
        textAlign: 'center',
        color: '#3f4b58'
    },
    paperDescription: {
        margin: '0px',
        fontFamily: '"Be Vietnam", sans-serif',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: ' 1.57143',
        textAlign: 'center',
        color: 'rgb(99, 115, 129)',
    }
}));
export default styles