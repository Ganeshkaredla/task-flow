import React, { Component } from 'react'
import {
   CardContainer,
   NoTasksText,
   AddNewTaskButton
} from './styledComponents'

interface Props {
   handleAddTaskModel: Function
}

class NoTasksCard extends Component<Props> {
   render() {
      const { handleAddTaskModel } = this.props
      return (
         <CardContainer>
            <NoTasksText>You have no task</NoTasksText>
            <AddNewTaskButton
               text={'+ New Task'}
               onClick={handleAddTaskModel}
            />
         </CardContainer>
      )
   }
}

export default NoTasksCard
