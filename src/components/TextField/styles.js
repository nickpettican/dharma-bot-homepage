export default (theme) => ({
  root: {
    padding: 0,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  input: {
    minWidth: theme.spacing.unit * 6,
    backgroundColor: theme.palette.common.white,
    "&$disabled": {
      backgroundColor: theme.palette.divider
    }
  },
  inputBorder: {
    border: "1px solid #e9ddd0",
    "&:focus": {
      borderColor: theme.palette.secondary.main
    }
  },
  disabled: {},
  inputSizeSmall: {
    fontSize: 14,
    padding: theme.spacing.unit,
    width: `calc(100% - ${theme.spacing.unit * 2}px)`
  },
  inputSizeMedium: {
    fontSize: 16,
    padding: theme.spacing.unit * 2,
    width: `calc(100% - ${theme.spacing.unit * 4}px)`
  },
  inputSizeLarge: {
    fontSize: 18,
    padding: 22,
    width: `calc(100% - ${22 * 2}px)`
  },
  inputSizeXlarge: {
    fontSize: 20,
    padding: 25,
    width: `calc(100% - ${25 * 2}px)`
  },
  formLabel: {
    fontSize: 18
  },
  select: {
    height: "auto",
    borderRadius: 0
  },
  selectIcon: {
    top: "50%",
    marginTop: -12
  }
});
