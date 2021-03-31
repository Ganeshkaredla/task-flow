import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line
import {
   CardContainer,
   NoTasksText,
   AddNewTaskButton
} from './styledComponents'

interface Props extends WithTranslation {
   handleAddTaskModel: Function
}

class NoTasksCard extends Component<Props> {
   render(): React.ReactNode {
      const { t, handleAddTaskModel } = this.props
      return (
         <CardContainer>
            <NoTasksText>{t('taskflow.noTaskText')}</NoTasksText>
            <AddNewTaskButton
               text={t('taskflow.addNewTask')}
               onClick={handleAddTaskModel}
            />
         </CardContainer>
      )
   }
}

export default withTranslation()(NoTasksCard)
