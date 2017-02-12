// import {Colors, ColorManipulator, Spacing, zIndex} from 'material-ui';

// import Colors from 'material-ui/styles/colors';
// import Spacing from 'material-ui/lib/styles/spacing';
// import zIndex from 'material-ui/lib/styles/zIndex';
// import ColorManipulator from 'material-ui/lib/utils/color-manipulator';

import {colors, spacing, zIndex} from 'material-ui/styles';
import {fade} from 'material-ui/utils/colorManipulator.js';

export default {
  spacing: spacing,
  zIndex: zIndex,
  fontFamily: 'Open Sans, sans-serif',
  textTransform: 'none',
  palette: {
    primary1Color: '#F7BC52',
    primary2Color: colors.orangeA400,
    primary3Color: colors.lightBlack,
    accent1Color: '#2AACE3',
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: fade(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.orangeA200
  }
};
