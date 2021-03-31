import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

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

interface Props extends WithTranslation {
   taskDetails: TaskModel
   handleDeleteTask: Function
   handleUpdateTask: Function
}

@observer
class TaskItem extends Component<Props> {
   @observable toggleEdit: boolean
   @observable taskNameRef
   constructor(props) {
      super(props)
      this.toggleEdit = false
      this.taskNameRef = React.createRef()
   }

   focusTaskNameInputField = (): void => {
      setTimeout(() => this.taskNameRef?.current.focus())
   }

   handleEditButton = (): void => {
      this.toggleEdit = !this.toggleEdit
      this.focusTaskNameInputField()
   }

   handleTaskFieldBlur = (): void => {
      const { taskDetails, handleUpdateTask } = this.props
      handleUpdateTask(taskDetails.taskId)
      this.handleEditButton()
   }

   handleCheckBox = (event): void => {
      const { taskDetails } = this.props
      taskDetails.setCompletionStatus(event.target.checked)
   }

   handleDeleteTask = (): void => {
      const { taskDetails, handleDeleteTask } = this.props
      handleDeleteTask(taskDetails.taskId)
   }

   handleTaskNameChange = (event): void => {
      const { taskDetails } = this.props
      taskDetails.setTaskNameChange(event.target.value)
   }

   render(): React.ReactNode {
      const { t, taskDetails } = this.props
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
                  <EditableTaskName
                     ref={this.taskNameRef}
                     placeholder={t('taskflow.emptyTaskPlaceholderText')}
                     isHidden={this.toggleEdit}
                     value={taskName}
                     onChange={this.handleTaskNameChange}
                     isCompleted={completed}
                     onBlur={this.handleTaskFieldBlur}
                  />
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

export default withTranslation()(TaskItem)
