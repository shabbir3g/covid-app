import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.Regular,
    fontSize: 14,
}

const BOLD = {
    fontFamily: typography.Bold,
    fontSize: spacing[6],
}

export const presets = {
    default: BASE,
    bold: BOLD,
    medium: {
        fontFamily: typography.Medium,
        fontSize: spacing[5]
    },
   

}