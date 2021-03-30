import { observer } from 'mobx-react'
import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
   CardContainer,
   TasksCompletedText,
   CompletedTasksNumber,
   TasksStatusWrapper,
   TotalTasksNumber
} from './styledComponents'

interface Props extends WithTranslation {
   totalTasks: number
   completedTasks: number
}

@observer
class CompletedTasksCard extends Component<Props> {
   render() {
      const { completedTasks, totalTasks } = this.props
      return (
         <CardContainer>
            <TasksCompletedText>Tasks Completed</TasksCompletedText>
            <TasksStatusWrapper>
               <CompletedTasksNumber>{completedTasks}</CompletedTasksNumber>
               <TotalTasksNumber>/ {totalTasks}</TotalTasksNumber>
            </TasksStatusWrapper>
         </CardContainer>
      )
   }
}

export default withTranslation()(CompletedTasksCard)
