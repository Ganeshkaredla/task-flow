import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import {
   CardContainer,
   CompletedTasksText,
   DiagonalLine
} from './styledComponents'
import './styles.scss'

interface Props extends WithTranslation {
   percentage: number
}

class CompletionPercentageChartCard extends Component<Props> {
   render(): React.ReactNode {
      const { t, percentage } = this.props
      const isPercentageNotZero = percentage > 0
      return (
         <CardContainer>
            <CircularProgressbar
               value={percentage}
               strokeWidth={50}
               styles={buildStyles({
                  strokeLinecap: 'butt'
               })}
            />
            <DiagonalLine isPercentageNotZero={isPercentageNotZero}>
               {`/`}
            </DiagonalLine>
            <CompletedTasksText isPercentageNotZero={isPercentageNotZero}>
               {isPercentageNotZero
                  ? t('taskflow.completedTasks')
                  : t('taskflow.notCompletedTasks')}
            </CompletedTasksText>
         </CardContainer>
      )
   }
}

export default withTranslation()(CompletionPercentageChartCard)
