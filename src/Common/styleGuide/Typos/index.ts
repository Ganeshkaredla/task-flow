import styled from 'styled-components'
import Colors from '../../themes/Colors'

export const BaseMontserratText = styled.span`
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
//10px

export const Typo10CornflowerBlueMontserratSemiBoldText = styled(
   BaseMontserratSemiBoldText
)`
   font-size: 10px;
   color: ${Colors.cornflowerBlue};
`

//12px

export const Typo12PinkishOrangeMontserrat = styled(BaseMontserratText)`
   font-size: 12px;
   color: ${Colors.pinkishOrange};
`

//14px
export const Typo14IrisBlueMontserrat = styled(BaseMontserratMediumText)`
   font-size: 14px;
   color: ${Colors.irisBlue};
`

export const Typo14SubmarineMontserratMedium = styled(BaseMontserratMediumText)`
   font-size: 14px;
   color: ${Colors.submarine};
`

//16px
export const Typo16LynchMontserratMedium = styled(BaseMontserratMediumText)`
   font-size: 16px;
   color: ${Colors.lynch};
`

//20px
export const Typo20DarkGreenMontserratBoldText = styled(BaseMontserratBoldText)`
   font-size: 20px;
   color: ${Colors.darkGreen};
`
export const Typo20BreakerBayMontserratMediumText = styled(
   BaseMontserratMediumText
)`
   font-size: 20px;
   color: ${Colors.breakerBay};
`

export const Typo20SubmarineMontserratMediumText = styled(
   BaseMontserratBoldText
)`
   font-size: 20px;
   color: ${Colors.submarine};
`
export const Typo20CornflowerBlueMontserratMediumText = styled(
   BaseMontserratMediumText
)`
   font-size: 20px;
   color: ${Colors.cornflowerBlue};
`

//64px

export const Typo64CornflowerBlueMontserratMediumText = styled(
   BaseMontserratBoldText
)`
   font-size: 64px;
   color: ${Colors.cornflowerBlue};
`
