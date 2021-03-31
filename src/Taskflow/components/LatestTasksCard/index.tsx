import { observer } from 'mobx-react'
import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import TaskModel from '../../stores/models/TaskModel'

import {
   CardContainer,
   LatestCreatedTasksText,
   LatestCreatedTasksList,
   TaskItem
} from './styledComponents'

interface Props extends WithTranslation {
   latestCreatedTasks: Array<TaskModel>
}

@observer
class LatestTasksCard extends Component<Props> {
   render(): React.ReactNode {
      const { t, latestCreatedTasks } = this.props
      return (
         <CardContainer>
            <LatestCreatedTasksText>
               {t('taskflow.latestCreatedTasks')}
            </LatestCreatedTasksText>
            <LatestCreatedTasksList>
               {latestCreatedTasks.map(each => (
                  <TaskItem key={each.taskId} isCompleted={each.completed}>
                     {each.taskName}
                  </TaskItem>
               ))}
            </LatestCreatedTasksList>
         </CardContainer>
      )
   }
}

export default withTranslation()(LatestTasksCard)
