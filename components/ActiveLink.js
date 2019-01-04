import { Router } from '../routes'
import {withRouter} from 'next/router'
import classnames from 'classnames'

const ActiveLink = ({ children, router, href }) => {
  const style = classnames('btn btn-link', {
    'btn--active-link': router.pathname === href
  })

  const handleClick = (e) => {
    e.preventDefault()
    Router.pushRoute(href).then(() => window.scrollTo(0, 0));
  }
  
  return (
    <a  onClick={handleClick} className={style}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)