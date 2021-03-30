import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React, { Component } from 'react'
import TextInput from '../../../Common/components/TextInput'
import { validateEmpty } from '../../../Common/utils/ValidationUtils'

import {
   CardContainer,
   AddNewTaskButton,
   AddNewTaskText
} from './styledComponents'

interface Props {
   handleAddTaskButton: Function
   createTaskAPIStatus: number
}

@observer
class CreateNewTaskCard extends Component<Props> {
   @observable taskName!: string
   @observable taskNameFieldRef
   constructor(props) {
      super(props)
      this.taskName = ''
      this.taskNameFieldRef = React.createRef()
   }

   validateTaskName = () => validateEmpty(this.taskName)

   validateAddTask = (): boolean => !this.taskNameFieldRef.current.isError

   handleTaskNameChange = (event): void => {
      const value = event.target.value
      this.taskName = value
   }

   handleAddTaskButton = (): void => {
      this.taskNameFieldRef.current.onBlur()
      if (this.validateAddTask()) {
         const { handleAddTaskButton } = this.props
         handleAddTaskButton(this.taskName)
      }
   }

   render() {
      const { createTaskAPIStatus } = this.props
      return (
         <CardContainer>
            <AddNewTaskText>+ New Task</AddNewTaskText>
            <TextInput
               ref={this.taskNameFieldRef}
               placeholder={'Task Name'}
               onChange={this.handleTaskNameChange}
               validate={this.validateTaskName}
            />
            <AddNewTaskButton
               text={'+ New Task '}
               onClick={this.handleAddTaskButton}
               apiStatus={createTaskAPIStatus}
            />
         </CardContainer>
      )
   }
}

export default CreateNewTaskCard
