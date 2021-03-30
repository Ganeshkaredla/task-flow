import { observer } from 'mobx-react'
import React, { Component } from 'react'
import TaskModel from '../../stores/models/TaskModel'

import { Container, TaskNameText, CheckBox } from './styledComponents'

interface Props {
   taskDetails: TaskModel
}

@observer
class TaskItem extends Component<Props> {
   handleCheckBox = (event): void => {
      const { taskDetails } = this.props
      taskDetails.setCompletionStatus(event.target.checked)
   }

   handleTaskNameChange = event => {
      console.log(event)
      const { taskDetails } = this.props
      taskDetails.setTaskNameChange(event.target.value)
   }

   render() {
      const { taskDetails } = this.props
      const { completed, taskName } = taskDetails
      return (
         <Container>
            <CheckBox
               data-testid={'testId'}
               type='checkbox'
               checked={completed}
               onChange={this.handleCheckBox}
               value={''}
            />
            <TaskNameText
               value={taskName}
               onChange={this.handleTaskNameChange}
            />
         </Container>
      )
   }
}

export default TaskItem
