import React, { Component } from 'react'
import ReactModal from 'react-modal'

import Colors from '../../themes/Colors'

import { CloseIconWrapper } from './styledComponents'
import './styles.scss'

interface Props {
   children: React.ReactNode
   hideCloseIcon?: boolean
   handleClose: Function
   [x: string]: any
}

interface State {
   modalIsOpen: boolean
}

ReactModal.defaultStyles.overlay.backgroundColor = Colors.foggyBlack

class BaseModalContainer extends Component<Props, State> {
   state = {
      modalIsOpen: false
   }

   static defaultProps = {
      hideCloseIcon: false
   }

   openModal = (): void => {
      this.setState({
         modalIsOpen: true
      })
   }

   closeModal = (): void => {
      const { handleClose } = this.props
      this.setState({
         modalIsOpen: false
      })
      handleClose()
   }

   UNSAFE_componentWillMount(): void {
      ReactModal.setAppElement('body')
   }

   onModalOpen = (): void => {
      document.body.style.overflow = 'hidden'
   }
   onModalClose = (): void => {
      document.body.removeAttribute('style')
   }

   render(): React.ReactNode {
      const { children, hideCloseIcon, ...other } = this.props
      const { modalIsOpen } = this.state

      return (
         <ReactModal
            className={'baseModalStyles'}
            overlayClassName={'baseModalOverlayStyles'}
            closeTimeoutMS={0}
            isOpen={modalIsOpen}
            onAfterOpen={this.onModalOpen}
            onAfterClose={this.onModalClose}
            {...other}
         >
            {hideCloseIcon ? null : (
               <CloseIconWrapper onClick={this.closeModal}>X</CloseIconWrapper>
            )}

            {children}
         </ReactModal>
      )
   }
}

export default BaseModalContainer
