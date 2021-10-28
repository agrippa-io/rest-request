import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import EdisenRequest from '../EdisenRequest/EdisenRequest'
import ContextProviderUtil from './ContextUtil'
import TYPE_ACTION_ASSET from '../../contexts/Asset/type.actions'

export default function RestRequestHOC(props, Component) {
  class RestRequestHOCController extends PureComponent {
    componentDidMount() {
      this.fetchData()
    }

    componentDidUpdate(prevProps) {
      if (!isEqual(this.props, prevProps)) {
        this.fetchData()
      }
    }

    async fetchData() {
      const [contextData, dispatch] = this.context
      try {
        const response = await EdisenRequest.perform(this.props)
        const {
          paging: { page },
        } = this.props
        dispatch({
          type: TYPE_ACTION_ASSET.ADD,
          data: response,
          page,
        })
      } catch (err) {
        console.error('ERR - Failed to fetch data', err)
      }
    }

    render() {
      const [contextData] = this.context
      return <Component contextData={contextData} />
    }
  }

  RestRequestHOCController.contextType = ContextProviderUtil.getContext(props)
  RestRequestHOCController.propTypes = {
    paging: PropTypes.any,
  }
  RestRequestHOCController.defaultProps = {
    paging: {
      page: 0,
      pageSize: 100,
    },
  }

  return RestRequestHOCController
}
