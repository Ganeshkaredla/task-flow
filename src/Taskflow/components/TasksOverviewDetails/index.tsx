import { observer } from 'mobx-react'
import React, { Component } from 'react'
import TasksStore from '../../stores/TasksStore'
import CompletedTasksCard from '../CompletedTasksCard'
import CompletionPercentageChartCard from '../CompletionPercentageChartCard'
import LatestTasksCard from '../LatestTasksCard'

import { Container } from './styledComponents'

interface Props {
   tasksStore: TasksStore
}

@observer
class TasksOverviewDetails extends Component<Props> {
   render() {
      const { tasksStore } = this.props
      const {
         totalTasks,
         tasksCompleted,
         latestCreatedTasks,
         tasksCompletionPercentage
      } = tasksStore
      return (
         <Container>
            <CompletedTasksCard
               totalTasks={totalTasks}
               completedTasks={tasksCompleted}
            />
            <LatestTasksCard latestCreatedTasks={latestCreatedTasks} />
            <CompletionPercentageChartCard
               percentage={tasksCompletionPercentage}
            />
         </Container>
      )
   }
}

export default TasksOverviewDetails
