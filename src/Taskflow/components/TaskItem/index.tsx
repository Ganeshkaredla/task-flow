import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React, { Component } from 'react'
import TaskModel from '../../stores/models/TaskModel'

import {
   Container,
   TaskNameText,
   CheckBox,
   EditableTaskName,
   CheckBoxWrapper,
   TextNameWrapper,
   TaskButtonsWrapper,
   TaskDetailsWrapper,
   DeleteIcon,
   EditIcon
} from './styledComponents'

interface Props {
   taskDetails: TaskModel
   handleDeleteTask: Function
}

@observer
class TaskItem extends Component<Props> {
   @observable toggleEdit: boolean

   constructor(props) {
      super(props)
      this.toggleEdit = false
   }

   handleEditButton = (): void => {
      this.toggleEdit = !this.toggleEdit
   }

   handleCheckBox = (event): void => {
      const { taskDetails } = this.props
      taskDetails.setCompletionStatus(event.target.checked)
   }

   handleDeleteTask = (): void => {
      const { taskDetails, handleDeleteTask } = this.props
      handleDeleteTask(taskDetails.taskId)
   }

   handleTaskNameChange = event => {
      const { taskDetails } = this.props
      taskDetails.setTaskNameChange(event.target.value)
   }

   render() {
      const { taskDetails } = this.props
      const { completed, taskName } = taskDetails
      return (
         <Container>
            <TaskDetailsWrapper>
               <CheckBoxWrapper>
                  <CheckBox
                     data-testid={'testId'}
                     type='checkbox'
                     checked={completed}
                     onChange={this.handleCheckBox}
                  />
               </CheckBoxWrapper>
               <TextNameWrapper>
                  <TaskNameText
                     isHidden={this.toggleEdit}
                     isCompleted={completed}
                  >
                     {taskName}
                  </TaskNameText>
                  {this.toggleEdit && (
                     <EditableTaskName
                        placeholder={'Task name should not be empty'}
                        isEditable={this.toggleEdit}
                        value={taskName}
                        onChange={this.handleTaskNameChange}
                     />
                  )}
               </TextNameWrapper>
            </TaskDetailsWrapper>
            <TaskButtonsWrapper>
               <EditIcon
                  src={'/images/edit-icon.png'}
                  onClick={this.handleEditButton}
               />
               <DeleteIcon
                  src={'/images/trash-icon.png'}
                  onClick={this.handleDeleteTask}
               />
            </TaskButtonsWrapper>
         </Container>
      )
   }
}

export default TaskItem
