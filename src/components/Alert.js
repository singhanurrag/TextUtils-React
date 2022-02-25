import React from 'react'

export default function alert(props) {
  return (
    props.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
      <h5><center>{props.alert.msg}</center></h5>  
    </div>
  )
}
