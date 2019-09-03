// @flow

import variable from './../variables/platform';
import { PLATFORM } from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const badgeTheme = {
    '.primary': {
      backgroundColor: variables.buttonPrimaryBg
    },
    '.warning': {
      backgroundColor: variables.buttonWarningBg
    },
    '.info': {
      backgroundColor: variables.buttonInfoBg
    },
    '.success': {
      backgroundColor: variables.buttonSuccessBg
    },
    '.danger': {
      backgroundColor: variables.buttonDangerBg
    },
    'NativeBase.Text': {
      color: variables.badgeColor,
      fontSize: variables.fontSizeBase,
      textAlign: 'center',
      paddingHorizontal: 2,

    },
    backgroundColor: variables.badgeBg,
    paddingHorizontal: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 75,
  };
  return badgeTheme;
};
