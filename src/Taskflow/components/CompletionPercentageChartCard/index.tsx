import React, { Component } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { CardContainer } from './styledComponents'
import './styles.scss'

interface Props {
   percentage: number
}

class CompletionPercentageChartCard extends Component<Props> {
   render() {
      const { percentage } = this.props
      return (
         <CardContainer>
            <CircularProgressbar
               value={percentage}
               strokeWidth={50}
               styles={buildStyles({
                  strokeLinecap: 'butt'
               })}
            />
            {/* <DiagonalLine>Completed Tasks</DiagonalLine> */}
         </CardContainer>
      )
   }
}

export default CompletionPercentageChartCard
