import { observer } from 'mobx-react'
import React, { Component } from 'react'
import TaskModel from '../../stores/models/TaskModel'

import {
   CardContainer,
   LatestCreatedTasksText,
   LatestCreatedTasksList,
   TaskItem
} from './styledComponents'

interface Props {
   latestCreatedTasks: Array<TaskModel>
}

@observer
class LatestTasksCard extends Component<Props> {
   render() {
      const { latestCreatedTasks } = this.props
      return (
         <CardContainer>
            <LatestCreatedTasksText>
               Latest Created tasks
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

export default LatestTasksCard
