import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import TextInput from '../../../Common/components/TextInput'
import { validateEmpty } from '../../../Common/utils/ValidationUtils'

import {
   CardContainer,
   AddNewTaskButton,
   AddNewTaskText
} from './styledComponents'

interface Props extends WithTranslation {
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

   componentDidMount(): void {
      this.taskNameFieldRef?.current.focus()
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

   render(): React.ReactNode {
      const { t, createTaskAPIStatus } = this.props
      return (
         <CardContainer>
            <AddNewTaskText>{t('taskflow.addNewTask')}</AddNewTaskText>
            <TextInput
               ref={this.taskNameFieldRef}
               placeholder={t('taskflow.taskName')}
               onChange={this.handleTaskNameChange}
               validate={this.validateTaskName}
            />
            <AddNewTaskButton
               text={t('taskflow.addNewTask')}
               onClick={this.handleAddTaskButton}
               apiStatus={createTaskAPIStatus}
            />
         </CardContainer>
      )
   }
}

export default withTranslation()(CreateNewTaskCard)
