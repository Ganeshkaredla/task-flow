import styled from 'styled-components'
import Colors from '../../themes/Colors'

export const BaseMontserratText =styled.span`
    font-family: 'Montserrat';
`
export const BaseMontserratMediumText = styled(BaseMontserratText)`
   font-weight: 500;
`

export const BaseMontserratSemiBoldText = styled(BaseMontserratText)`
   font-weight: 600;
`

export const BaseMontserratBoldText = styled(BaseMontserratText)`
   font-weight: 700;
`


//12px

export const Typo12PinkishOrangeMontserrat = styled(BaseMontserratText)`
   font-size: 12px;
   color: ${Colors.pinkishOrange};
`

//14px 
export const Typo14IrisBlueMontserrat = styled(BaseMontserratMediumText)`
    font-size:14px;
    color:${Colors.irisBlue}
`

//20px
export const Typo20DarkGreenMontserratBoldText = styled(BaseMontserratBoldText)`
    font-size:20px;
    color:${Colors.darkGreen}
`
