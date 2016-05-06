import React from 'react'
import TimeAgo from 'react-timeago'
import Menu from '../components/Menu'

const AppLayout = (props) =>  {
    return (
      <div>
        <Menu {...props} />
        {props.children}
      </div>
    )
}

export default AppLayout
